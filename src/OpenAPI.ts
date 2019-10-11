import 'isomorphic-fetch';
import { EventEmitter } from 'events';
import {
  LimitOrderResponse,
  MarketInstrument,
  MarketInstrumentList,
  Operations,
  OperationType,
  Order,
  Portfolio,
  SandboxSetCurrencyBalanceRequest,
  SandboxSetPositionBalanceRequest,
} from './domain';
const WebSocket = require('ws');
type OperationsInterval = '1day' | '7days' | '14days' | '30days';
type Interval =
  | '1min'
  | '2min'
  | '3min'
  | '5min'
  | '10min'
  | '15min'
  | '30min'
  | 'hour'
  | '2hour'
  | '4hour'
  | 'day'
  | 'week'
  | 'month';
type Depth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type HttpMethod = 'get' | 'post';
type SocketEventType = 'orderbook' | 'candle' | 'instrument_info';
type Dict<T> = { [x: string]: T };
type OrderbookStreaming = {
  figi: string;
  depth: Depth;
  bids: Array<[number, number]>;
};
type InstrumentId = { ticker: string } | { figi: string };
type CandleStreaming = {
  o: number;
  c: number;
  h: number;
  l: number;
  v: number;
  time: string;
  interval: Interval;
  figi: string;
};

function getQueryString(params: { [x: string]: string | number }) {
  const esc = encodeURIComponent;
  let s = Object.keys(params)
    .map((k) => esc(k) + '=' + esc(params[k]))
    .join('&');
  return s ? '?' + s : '';
}

type LimitOrderParams = {
  figi: string;
  lots: number;
  operation: OperationType;
  price: number;
};

function once<P extends Array<any>, R>(fn: (...args: P) => R): (...args: P) => R {
  let result: { value: R };
  return (...args: P) => {
    if (!result) {
      result = { value: fn(...args) };
    }
    return result.value;
  };
}

/**
 * @noInheritDoc
 */
export default class OpenAPI extends EventEmitter {
  private _ws: any = null;
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
  constructor({
    apiURL,
    socketURL,
    secretToken,
  }: {
    apiURL: string;
    socketURL: string;
    secretToken: string;
  }) {
    super();
    this._ws = null;
    this.apiURL = apiURL;
    this.socketURL = socketURL;
    this.secretToken = secretToken;
    this.authHeaders = {
      Authorization: 'Bearer ' + this.secretToken,
      'Content-Type': 'application/json',
    };
  }

  private ws() {
    if (!this._ws) {
      this._ws = new Promise((resolve) => {
        const ws = new WebSocket(this.socketURL, {
          perMessageDeflate: false,
          headers: this.authHeaders,
        });
        ws.on('open', () => {
          resolve(ws);
        });
        ws.on('message', (m: any) => {
          const { event: type, payload } = JSON.parse(m);
          this.emit(this.getEventName(type, payload), payload);
        });
      });
    }

    return this._ws;
  }

  private makeRequest<P extends {}>(
    url: string,
    { method = 'get', params }: { method?: HttpMethod; params?: P } = {}
  ) {
    return (method === 'get'
      ? fetch(this.apiURL + url + getQueryString(params || {}), {
          method,
          headers: new Headers(this.authHeaders),
        })
      : fetch(this.apiURL + url, {
          method,
          headers: new Headers(this.authHeaders),
          body: JSON.stringify(params),
        })
    )
      .then((x) => {
        return x.json();
      })
      .then((x) => {
        return x.payload;
      });
  }

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

  private subscribeToSocket({ type, ...params }: any, cb: Function) {
    this.ws().then((ws: any) => {
      return ws.send(
        JSON.stringify({
          event: `${type}:subscribe`,
          ...params,
        })
      );
    });
    const handler = (x: any) => cb(x);
    let eventName = this.getEventName(type, params);
    this.on(eventName, handler);

    const unsubscribe = () => {
      this.off(eventName, handler);
      if (!this.listenerCount(eventName)) {
        this.ws().then((ws: any) =>
          ws.send(
            JSON.stringify({
              event: `${type}:unsubscribe`,
              ...params,
            })
          )
        );
      }
    };
    return unsubscribe;
  }

  private sandboxRegister = once(() => this.makeRequest('/sandbox/register', { method: 'post' }));

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
   * Метод для выставления заявки
   * @param figi идентификатор инструмента
   * @param lots количество лотов для заявки
   * @param operation тип заявки
   * @param price цена лимитной заявки
   */
  limitOrder({ figi, lots, operation, price }: LimitOrderParams): Promise<LimitOrderResponse> {
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
  cancelOrder({ orderId }: { orderId: string }): Promise<LimitOrderResponse> {
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

  //todo:
  /**
   * Метод для получения операций по цб по инструменту
   * @param from Дата, с которой необходимо получить операции в формате ???
   * @param interval Интервал, за который необходимы операции
   * @param figi Идентификатор инструмента
   */
  operations({
    from,
    interval,
    figi,
  }: {
    from: string;
    interval: OperationsInterval;
    figi: string;
  }): Promise<Operations> {
    return this.makeRequest('/operations', {
      params: { from, interval, figi },
    });
  }

  /**
   * Метод для поиска инструментов по figi или ticker
   * @param params { figi или ticker }
   */
  search(params: InstrumentId): Promise<MarketInstrumentList> {
    if ('figi' in params) {
      return this.makeRequest('/market/search/by-figi', {
        params: { figi: params.figi },
      });
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
   * @example см. метод orderbook
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
   * @example см. метод orderbook
   * @param figi идентификатор инструмента
   * @param cb функция для обработки новых данных по инструменту
   * @return функция для отмены подписки
   */
  instrumentInfo({ figi }: { figi: string }, cb = console.log) {
    return this.subscribeToSocket({ type: 'instrument_info', figi }, cb);
  }
}
