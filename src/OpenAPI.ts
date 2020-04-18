import 'isomorphic-fetch';
import { EventEmitter } from 'events';
import { Candles, MarketInstrument, MarketInstrumentList, Operations } from './domain';
import { Order, Orderbook, PlacedLimitOrder, Portfolio, PortfolioPosition } from './domain';
import { SandboxSetCurrencyBalanceRequest, SandboxSetPositionBalanceRequest, Currencies } from './domain';
import WebSocket from 'ws';
import { HttpMethod, SocketEventType, Dict, InstrumentId, Depth, Interval, LimitOrderParams, OrderbookStreaming, CandleStreaming } from './types';

export * from './types';
export * from './domain';

function getQueryString(params: Record<string, string | number>) {
  // must be a number https://github.com/microsoft/TypeScript/issues/32951
  const searchParams = new URLSearchParams(params as any).toString();

  return searchParams.length ? `?${searchParams}` : '';
}

type OpenApiConfig = {
  apiURL: string,
  socketURL: string,
  secretToken: string
}

type RequestConfig<P> = {
  method?: HttpMethod;
  params?: P
}

const enum ReadyState {
  'CONNECTING',
  'OPEN',
  'CLOSING',
  'CLOSED',
}

/**
 * @noInheritDoc
 */
export default class OpenAPI extends EventEmitter {
  private _ws: WebSocket | null = null;
  private _wsPingTimeout?: NodeJS.Timeout;
  private _wsQueue: object[] = [];
  private _sandboxCreated: boolean = false;
  private _subscribeMessages: object[] = [];
  private readonly apiURL: string;
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
  constructor({ apiURL, socketURL, secretToken }: OpenApiConfig) {
    super();
    this.apiURL = apiURL;
    this.socketURL = socketURL;
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
      perMessageDeflate: false,
      headers: this.authHeaders,
    });

    this._ws.on('open', this.handleSocketOpen);
    this._ws.on('ping', this.handleSocketPing);
    this._ws.on('message', this.handleSocketMessage);
    this._ws.on('close', this.handleSocketClose)
    this._ws.on('error', this.handleSocketError)

    // Восстанавливаем подписки
    if (this._subscribeMessages) {
      this._subscribeMessages.forEach(msg => {
        this.enqueue(msg);
      });
    }
  }

  /**
   * Обработчик открытия соединения
   */
  private handleSocketOpen = () => {
    this.emit('socket-open');
    this.dispatchWsQueue();
  }

  /**
   * Обработчик серверного пинга
   */
  private handleSocketPing = (m: Buffer) => {
    this._ws?.pong(m);
    clearTimeout(this._wsPingTimeout!);

    this._wsPingTimeout = setTimeout(() => {
      this._ws?.terminate();
    }, 30000 + 1000);
  }

  /**
   * Обработчик закрытия соединения
   */
  private handleSocketClose = () => {
    clearTimeout(this._wsPingTimeout!);
    this.emit('socket-close');
    this.handleSocketError();
  }

  /**
   * Обработчик ошибок и переподключение при необходимости
   */
  private handleSocketError = () => {
    clearTimeout(this._wsPingTimeout!);
    const isClosed = [ReadyState.CLOSING, ReadyState.CLOSED].includes(this._ws?.readyState!);

    if (isClosed) {
      this._ws?.terminate();
      this._ws = null;
      this.connect();
    }
  }

  /**
   * Обработчик входящих сообщений
   */
  private handleSocketMessage = (m: string) => {
    const { event: type, payload } = JSON.parse(m);

    this.emit(this.getEventName(type, payload), payload);
  }

  /**
   * Запрос к REST
   */
  private async makeRequest<P, R>(url: string, { method = 'get', params }: RequestConfig<P> = {}): Promise<R> {
    let requestParams: Record<string, any> = { method, headers: new Headers(this.authHeaders) };
    let requestUrl = method === 'get' ? this.apiURL + url + getQueryString(params || {}) : this.apiURL + url;

    if (method === 'post') {
      requestParams.body = JSON.stringify(params);
    }

    const res = await fetch(requestUrl, requestParams);

    if (!res.ok) {
      return res.json().then((x) => Promise.reject(x.payload));
    }

    const data = await res.json();

    return data.payload;
  }

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
        const index = this._subscribeMessages.findIndex(msg => msg === message);

        if (index !== -1) {
          this._subscribeMessages.splice(index, 1);
        }
      }
    };
  }

  /**
   * Регистрация песочницы
   */
  private sandboxRegister() {
    if (!this._sandboxCreated) {
      this.makeRequest('/sandbox/register', { method: 'post' });
      this._sandboxCreated = true;
    }
  };

  /**
   * Метод для очистки песочницы
   */
  async sandboxClear(): Promise<any> {
    await this.sandboxRegister();
    return this.makeRequest('/sandbox/clear', { method: 'post' });
  }

  /**
   * Метод для задания баланса по бумагам
   * @param params см. описание типа
   */
  async setPositionBalance(params: SandboxSetPositionBalanceRequest): Promise<void> {
    await this.sandboxRegister();
    return this.makeRequest('/sandbox/positions/balance', { method: 'post', params });
  }

  /**
   * Метод для задания баланса по валютам
   * @param params см. описание типа
   */
  async setCurrenciesBalance(params: SandboxSetCurrencyBalanceRequest): Promise<void> {
    await this.sandboxRegister();
    return this.makeRequest('/sandbox/currencies/balance', { method: 'post', params });
  }

  /**
   * Метод для получение портфеля цб
   */
  portfolio(): Promise<Portfolio> {
    return this.makeRequest('/portfolio');
  }

  /**
   * Метод для получения валютных активов клиента
   */
  portfolioCurrencies(): Promise<Currencies> {
    return this.makeRequest('/portfolio/currencies');
  }

  /**
   * Метод для получение данных по инструменту в портфеле
   */
  instrumentPortfolio(params: InstrumentId): Promise<PortfolioPosition | null> {
    return this.portfolio().then((x) => {
      return (
        x.positions.find((position) => {
          if ('figi' in params) {
            return position.figi === params.figi;
          }
          if ('ticker' in params) {
            return position.ticker === params.ticker;
          }
        }) || null
      );
    });
  }

  /**
   * Метод для выставления заявки
   * @param figi идентификатор инструмента
   * @param lots количество лотов для заявки
   * @param operation тип заявки
   * @param price цена лимитной заявки
   */
  limitOrder({ figi, lots, operation, price }: LimitOrderParams): Promise<PlacedLimitOrder> {
    return this.makeRequest(`/orders/limit-order?figi=${figi}`, {
      method: 'post',
      params: {
        lots,
        operation,
        price,
      },
    });
  }

  //todo протестить
  /**
   * Метод для отмены активных заявок
   * @param orderId идентифткатор заявки
   */
  cancelOrder({ orderId }: { orderId: string }): Promise<void> {
    return this.makeRequest(`/orders/cancel?orderId=${orderId}`, { method: 'post' });
  }

  /**
   * Метод для получения всех активных заявок
   */
  orders(): Promise<Order[]> {
    return this.makeRequest('/orders');
  }

  /**
   * Метод для получения всех доступных валютных инструментов
   */
  currencies(): Promise<MarketInstrumentList> {
    return this.makeRequest('/market/currencies');
  }

  /**
   * Метод для получения всех доступных валютных ETF
   */
  etfs(): Promise<MarketInstrumentList> {
    return this.makeRequest('/market/etfs');
  }

  /**
   * Метод для получения всех доступных облигаций
   */
  bonds(): Promise<MarketInstrumentList> {
    return this.makeRequest('/market/bonds');
  }

  /**
   * Метод для получения всех доступных акций
   */
  stocks(): Promise<MarketInstrumentList> {
    return this.makeRequest('/market/stocks');
  }

  /**
   * Метод для получения операций по цб по инструменту
   * @param from Начало временного промежутка в формате ISO 8601
   * @param to Конец временного промежутка в формате ISO 8601
   * @param figi Figi-идентификатор инструмента
   */
  operations({ from, to, figi }: { from: string; to: string; figi?: string }): Promise<Operations> {
    if (figi === undefined) {
      return this.makeRequest('/operations', {
        params: { from, to },
      });
    }
    return this.makeRequest('/operations', {
      params: { from, to, figi },
    });
  }

  /**
   * Метод для получения исторических свечей по FIGI
   * @param from Начало временного промежутка в формате ISO 8601
   * @param to Конец временного промежутка в формате ISO 8601
   * @param figi Figi-идентификатор инструмента
   * @param interval интервал для свечи
   */
  candlesGet({
    from,
    to,
    figi,
    interval = '1min',
  }: {
    from: string;
    to: string;
    figi: string;
    interval?: Interval;
  }): Promise<Candles> {
    return this.makeRequest('/market/candles', {
      params: { from, to, figi, interval },
    });
  }

  /**
   * Метод для получение стакана
   * @param figi Figi-идентификатор инструмента
   * @param depth
   */
  orderbookGet({ figi, depth = 3 }: { figi: string; depth?: Depth }): Promise<Orderbook> {
    return this.makeRequest('/market/orderbook', {
      params: { figi, depth },
    });
  }
  /**
   * Метод для поиска инструментов по figi или ticker
   * @param params { figi или ticker }
   */
  search(params: InstrumentId): Promise<MarketInstrumentList> {
    if ('figi' in params) {
      return this.makeRequest<any, MarketInstrument>('/market/search/by-figi', {
        params: { figi: params.figi },
      }).then((x) => (x ? { total: 1, instruments: [x] } : { total: 0, instruments: [] }));
    }
    if ('ticker' in params) {
      return this.makeRequest('/market/search/by-ticker', {
        params: { ticker: params.ticker },
      });
    }
    throw new Error('should specify figi or ticker');
  }

  /**
   * Метод для поиска инструмента по figi или ticker
   * @param params { figi или ticker }
   */
  searchOne(params: InstrumentId): Promise<MarketInstrument | null> {
    return this.search(params).then((x) => x.instruments[0] || null);
  }

  /**
   * Метод для подписки на данные по стакану инструмента
   * @example
   * ```typescript
   * const { figi } = await api.searchOne({ ticker: 'AAPL' });
   * const unsubFromAAPL = api.orderbook({ figi }, (ob) => { console.log(ob.bids) });
   * // ... подписка больше не нужна
   * unsubFromAAPL();
   * ```
   * @param figi идентификатор инструмента
   * @param depth
   * @param cb функция для обработки новых данных по стакану
   * @return функция для отмены подписки
   */
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
