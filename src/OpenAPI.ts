import 'isomorphic-fetch';
import {
  CandleResolution,
  Candles,
  Currencies,
  MarketInstrument,
  MarketInstrumentList,
  MarketOrderRequest,
  Operations,
  Order,
  Orderbook,
  PlacedLimitOrder,
  PlacedMarketOrder,
  Portfolio,
  PortfolioPosition,
  SandboxSetCurrencyBalanceRequest,
  SandboxSetPositionBalanceRequest,
  LimitOrderRequest,
} from './domain';
import {
  CandleStreaming,
  Depth,
  HttpMethod,
  InstrumentId,
  Interval,
  OrderbookStreaming,
  FIGI,
} from './types';
import { URLSearchParams } from 'url';
import Streaming from './Streeming';

export * from './types';
export * from './domain';

function getQueryString(params: Record<string, string | number>) {
  // must be a number https://github.com/microsoft/TypeScript/issues/32951
  const searchParams = new URLSearchParams(params as any).toString();

  return searchParams.length ? `?${searchParams}` : '';
}

type OpenApiConfig = {
  apiURL: string;
  socketURL: string;
  secretToken: string;
};

type RequestConfig<P> = {
  method?: HttpMethod;
  params?: P;
};

export default class OpenAPI {
  private _streaming: Streaming;
  private _sandboxCreated: boolean = false;
  private readonly apiURL: string;
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
    this._streaming = new Streaming({ url: socketURL, secretToken });
    this.apiURL = apiURL;
    this.secretToken = secretToken;
    this.authHeaders = {
      Authorization: 'Bearer ' + this.secretToken,
      'Content-Type': 'application/json',
    };
  }

  /**
   * Запрос к REST
   */
  private async makeRequest<P, R>(
    url: string,
    { method = 'get', params }: RequestConfig<P> = {}
  ): Promise<R> {
    let requestParams: Record<string, any> = { method, headers: new Headers(this.authHeaders) };
    let requestUrl =
      method === 'get' ? this.apiURL + url + getQueryString(params || {}) : this.apiURL + url;

    if (method === 'post') {
      requestParams.body = JSON.stringify(params);
    }

    const res = await fetch(requestUrl, requestParams);

    if (res.status === 401) {
      return Promise.reject(
        new Error(
          'Unauthorized! Try to use valid token. https://tinkoffcreditsystems.github.io/invest-openapi/auth/'
        )
      );
    }

    if (!res.ok) {
      throw res.headers.get('content-type') === 'application/json'
        ? (await res.json()).payload
        : await res.text();
    }

    const data = await res.json();

    return data.payload;
  }

  /**
   * Регистрация песочницы
   */
  private sandboxRegister() {
    if (!this._sandboxCreated) {
      this.makeRequest('/sandbox/register', { method: 'post' });
      this._sandboxCreated = true;
    }
  }

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
  limitOrder({
    figi,
    lots,
    operation,
    price,
  }: LimitOrderRequest & FIGI): Promise<PlacedLimitOrder> {
    return this.makeRequest(`/orders/limit-order?figi=${figi}`, {
      method: 'post',
      params: {
        lots,
        operation,
        price,
      },
    });
  }

  /**
   * Метод для выставления заявки
   * @param figi идентификатор инструмента
   * @param lots количество лотов для заявки
   * @param operation тип заявки
   * @param price цена лимитной заявки
   */
  marketOrder({ figi, lots, operation }: MarketOrderRequest & FIGI): Promise<PlacedMarketOrder> {
    return this.makeRequest(`/orders/market-order?figi=${figi}`, {
      method: 'post',
      params: {
        lots,
        operation,
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
  operations({ from, to, figi }: { from: string; to: string; figi: string }): Promise<Operations> {
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
    interval?: CandleResolution;
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
    return this._streaming.orderbook({ figi, depth }, cb);
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
    return this._streaming.candle({ figi, interval }, cb);
  }

  /**
   * Метод для подписки на данные по инструменту
   * @example см. метод [[orderbook]]
   * @param figi идентификатор инструмента
   * @param cb функция для обработки новых данных по инструменту
   * @return функция для отмены подписки
   */
  instrumentInfo({ figi }: { figi: string }, cb = console.log) {
    return this._streaming.instrumentInfo({ figi }, cb);
  }
}
