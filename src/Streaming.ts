import { EventEmitter } from 'events';
import WebSocket from 'ws';
import {
  CandleStreaming,
  Depth,
  Dict,
  Interval,
  OrderbookStreaming,
  SocketEventType,
} from './types';

/**
 * @hidden
 */
const enum ReadyState {
  'CONNECTING',
  'OPEN',
  'CLOSING',
  'CLOSED',
}

/**
 * @hidden
 */
export default class Streaming extends EventEmitter {
  private _ws: WebSocket | null = null;
  private _wsPingTimeout?: NodeJS.Timeout;
  private _wsQueue: object[] = [];
  private _subscribeMessages: object[] = [];
  private readonly socketURL: string;
  private readonly secretToken: string;
  private readonly authHeaders: any;

  /**
   *
   * @param apiURL REST api url см [документацию](https://tinkoffcreditsystems.github.io/invest-openapi/env/)
   * @param socketURL Streaming api url см [документацию](https://tinkoffcreditsystems.github.io/invest-openapi/env/)
   * @param secretToken токен доступа см [получение токена доступа](https://tinkoffcreditsystems.github.io/invest-openapi/auth/)
   *
   */
  constructor({ url, secretToken }: { url: string; secretToken: string }) {
    super();
    this.socketURL = url;
    this.secretToken = secretToken;
    this.authHeaders = {
      Authorization: 'Bearer ' + this.secretToken,
      'Content-Type': 'application/json',
    };
  }

  /**
   * Соединяемся с сокетом
   */
  private connect() {
    if (this._ws && [ReadyState.OPEN, ReadyState.CONNECTING].includes(this._ws.readyState)) {
      return;
    }

    this._ws = new WebSocket(this.socketURL, {
      handshakeTimeout: 4000,
      perMessageDeflate: false,
      headers: this.authHeaders,
    });

    this._ws.on('open', this.handleSocketOpen);
    this._ws.on('message', this.handleSocketMessage);
    this._ws.on('close', this.handleSocketClose);
    this._ws.on('error', this.handleSocketError);
  }

  /**
   * Обработчик открытия соединения
   */
  private handleSocketOpen = (e: Event) => {
    // Восстанавливаем подписки
    if (this._ws && this._subscribeMessages) {
      this._wsQueue.length = 0;
      this._subscribeMessages.forEach((msg) => {
        this.enqueue(msg);
      });
    }

    this.emit('socket-open', e);
    this.dispatchWsQueue();
    this.socketPingLoop();
  };

  /**
   * Зацикленная отправка пингов на сервер
   */
  private socketPingLoop = () => {
    if (this._ws) {
      this._ws.ping('ping');

      this._wsPingTimeout = setTimeout(this.socketPingLoop, 15_000)
    }
  }

  /**
   * Обработчик закрытия соединения
   */
  private handleSocketClose = (e: Event) => {
    this.emit('socket-close', e);
    this.handleSocketError();
  };

  /**
   * Обработчик ошибок и переподключение при необходимости
   */
  private handleSocketError = (e?: Error) => {
    clearTimeout(this._wsPingTimeout!);
    this.emit('socket-error', e);

    if (!this._ws) {
      return;
    }

    const isClosed = [ReadyState.CLOSING, ReadyState.CLOSED].includes(this._ws?.readyState!);

    this._ws.off('open', this.handleSocketOpen);
    this._ws.off('message', this.handleSocketMessage);
    this._ws.off('close', this.handleSocketClose);
    this._ws.off('error', this.handleSocketError);

    if (isClosed) {
      this._ws.terminate();
      this._ws = null;
      this.connect();
    }
  };

  /**
   * Обработчик входящих сообщений
   */
  private handleSocketMessage = (m: string) => {
    const { event: type, payload } = JSON.parse(m);

    this.emit(this.getEventName(type, payload), payload);
  };

  /**
   * Получение имени ивента
   */
  private getEventName(type: SocketEventType, params: Dict<string>) {
    if (type === 'orderbook') {
      return `${type}-${params.figi}-${params.depth}`;
    }

    if (type === 'candle') {
      return `${type}-${params.figi}-${params.interval}`;
    }

    if (type === 'instrument_info') {
      return `${type}-${params.figi}`;
    }

    throw new Error(`Unknown type: ${type}`);
  }

  /**
   * Поставить сообщение в очередь на отправку в сокет
   */
  private enqueue(command: object) {
    this._wsQueue.push(command);
    this.dispatchWsQueue();
  }

  /**
   * Разбор очереди сообщений на отправку в сокет
   */
  private dispatchWsQueue() {
    if (this._ws?.readyState === ReadyState.OPEN) {
      const cb = () => this._wsQueue.length && this.dispatchWsQueue();

      this._ws.send(JSON.stringify(this._wsQueue.shift()), cb);
    }
  }

  /**
   * Подписка на различные каналы в сокете
   */
  private subscribeToSocket({ type, ...params }: any, cb: Function) {
    if (!this._ws) {
      this.connect();
    }

    const message = { event: `${type}:subscribe`, ...params };
    this.enqueue(message);
    this._subscribeMessages.push(message);

    const handler = (x: any) => cb(x);
    let eventName = this.getEventName(type, params);

    this.on(eventName, handler);

    return () => {
      this.off(eventName, handler);

      if (!this.listenerCount(eventName)) {
        this.enqueue({ event: `${type}:unsubscribe`, ...params });
        const index = this._subscribeMessages.findIndex((msg) => msg === message);

        if (index !== -1) {
          this._subscribeMessages.splice(index, 1);
        }
      }
    };
  }

  orderbook(
    { figi, depth = 3 }: { figi: string; depth?: Depth },
    cb: (x: OrderbookStreaming) => any = console.log
  ) {
    return this.subscribeToSocket({ type: 'orderbook', figi, depth }, cb);
  }

  /**
   * Метод для подписки на данные по свечному графику инструмента
   * @example см. метод [[orderbook]]
   * @param figi идентификатор инструмента
   * @param interval интервал для свечи
   * @param cb функция для обработки новых данных по свечи
   * @return функция для отмены подписки
   */
  candle(
    { figi, interval = '1min' }: { figi: string; interval?: Interval },
    cb: (x: CandleStreaming) => any = console.log
  ) {
    return this.subscribeToSocket({ type: 'candle', figi, interval }, cb);
  }

  /**
   * Метод для подписки на данные по инструменту
   * @example см. метод [[orderbook]]
   * @param figi идентификатор инструмента
   * @param cb функция для обработки новых данных по инструменту
   * @return функция для отмены подписки
   */
  instrumentInfo({ figi }: { figi: string }, cb = console.log) {
    return this.subscribeToSocket({ type: 'instrument_info', figi }, cb);
  }
}
