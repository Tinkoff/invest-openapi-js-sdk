import 'isomorphic-fetch';
import { EventEmitter } from 'events';
import {
  LimitOrderRequest, LimitOrderResponse,
  MarketInstrument,
  MarketInstrumentList,
  Operations,
  Order,
  Portfolio,
  SandboxSetCurrencyBalanceRequest,
  SandboxSetPositionBalanceRequest,
} from './domain';
const WebSocket = require('ws');

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

export default class OpenAPI extends EventEmitter {
  _ws: any = null;
  apiURL: string;
  socketURL: string;
  secretToken: string;
  authHeaders: any;
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

  ws() {
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
          this.emit(this._getEventName(type, payload), payload);
        });
      });
    }

    return this._ws;
  }

  makeRequest<P extends {}>(
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

  portfolio(): Promise<Portfolio> {
    return this.makeRequest('/portfolio');
  }

  sandboxRegister(): Promise<any> {
    return this.makeRequest('/sandbox/register', { method: 'post' });
  }
  sandboxClear(): Promise<any> {
    return this.makeRequest('/sandbox/clear', { method: 'post' });
  }

  setPositionBalance(params: SandboxSetPositionBalanceRequest): Promise<any> {
    return this.makeRequest('/sandbox/positions/balance', { method: 'post', params });
  }

  setCurrenciesBalance(params: SandboxSetCurrencyBalanceRequest): Promise<any> {
    return this.makeRequest('/sandbox/currencies/balance', { method: 'post', params });
  }

  limitOrder(params: LimitOrderRequest & { figi: string }): Promise<LimitOrderResponse> {
    return this.makeRequest(`/orders/limit-order?figi=${params.figi}`, { method: 'post', params });
  }

  cancelOrder(params: { figi: string }): Promise<LimitOrderResponse> {
    return this.makeRequest('/orders/cancel', { params });
  }

  orders(): Promise<Order[]> {
    return this.makeRequest('/orders');
  }

  currencies(): Promise<MarketInstrumentList> {
    return this.makeRequest('/market/currencies');
  }

  etfs(): Promise<MarketInstrumentList> {
    return this.makeRequest('/market/etfs');
  }

  bonds(): Promise<MarketInstrumentList> {
    return this.makeRequest('/market/bonds');
  }

  stocks(): Promise<MarketInstrumentList> {
    return this.makeRequest('/market/stocks');
  }

  operations({
    from,
    interval,
    figi,
  }: {
    from: string;
    interval: Interval;
    figi: string;
  }): Promise<Operations> {
    return this.makeRequest('/operations', {
      params: { from, interval, figi },
    });
  }

  search(params: { ticker: string } | { figi: string }): Promise<MarketInstrumentList> {
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

  searchOne(params: { ticker: string } | { figi: string }): Promise<MarketInstrument | null> {
    return this.search(params).then((x) => x.instruments[0] || null);
  }

  _getEventName(type: SocketEventType, params: Dict<string>) {
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

  _subscribeToSocket({ type, ...params }: any, cb: Function) {
    this.ws().then((ws: any) => {
      return ws.send(
        JSON.stringify({
          event: `${type}:subscribe`,
          ...params,
        })
      );
    });
    const handler = (x: any) => cb(x);
    let eventName = this._getEventName(type, params);
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

  orderbook(
    { figi, depth = 3 }: { figi: string; depth?: Depth },
    cb: (x: OrderbookStreaming) => any = console.log
  ) {
    return this._subscribeToSocket({ type: 'orderbook', figi, depth }, cb);
  }

  candle(
    { figi, interval = '1min' }: { figi: string; interval?: Interval },
    cb: (x: CandleStreaming) => any = console.log
  ) {
    return this._subscribeToSocket({ type: 'candle', figi, interval }, cb);
  }

  instrumentInfo({ figi }: { figi: string }, cb = console.log) {
    return this._subscribeToSocket({ type: 'instrument_info', figi }, cb);
  }
}
