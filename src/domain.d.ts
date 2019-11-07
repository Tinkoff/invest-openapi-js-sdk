export type Empty = {
  trackingId: string;
  payload: any;
  status: string;
};

export type Error = {
  trackingId: string;
  status: string;
  payload: ErrorPayload;
};

export type PortfolioResponse = {
  trackingId: string;
  status: string;
  payload: Portfolio;
};

export type Portfolio = {
  positions: PortfolioPosition[];
};

export type PortfolioCurrenciesResponse = {
  trackingId: string;
  status: string;
  payload: Currencies;
};

export type Currencies = {
  currencies: CurrencyPosition[];
};

export type CurrencyPosition = {
  currency: Currency;
  balance: number;
  blocked?: number;
};

export type PortfolioPosition = {
  figi: string;
  ticker?: string;
  isin?: string;
  instrumentType: InstrumentType;
  balance: number;
  blocked?: number;
  lots: number;
  expectedYield?: MoneyAmount;
  averagePositionPrice?: MoneyAmount;
  averagePositionPriceNoNkd?: MoneyAmount;
};

export type MoneyAmount = {
  currency: Currency;
  value: number;
};

export type OrderbookResponse = {
  trackingId: string;
  status: string;
  payload: Orderbook;
};

export type Orderbook = {
  figi: string;
  depth: number;
  bids: OrderResponse[];
  asks: OrderResponse[];
  tradeStatus: TradeStatus;
  minPriceIncrement: number;
  lastPrice?: number;
  closePrice?: number;
  limitUp?: number;
  limitDown?: number;
};

export type OrderResponse = {
  price: number;
  quantity: number;
};

export type CandlesResponse = {
  trackingId: string;
  status: string;
  payload: Candles;
};

export type Candles = {
  figi: string;
  interval: CandleResolution;
  candles: Candle[];
};

export type Candle = {
  figi: string;
  interval: CandleResolution;
  o: number;
  c: number;
  h: number;
  l: number;
  v: number;
  time: string;
};

export type CandleResolution = {};

export type OperationsResponse = {
  trackingId: string;
  status: string;
  payload: Operations;
};

export type Operations = {
  operations: Operation[];
};

export type OperationTrade = {
  tradeId: string;
  date: string;
  price: number;
  quantity: number;
};

export type Operation = {
  id: string;
  status: OperationStatus;
  trades?: OperationTrade[];
  commission?: MoneyAmount;
  currency: Currency;
  payment: number;
  price?: number;
  quantity?: number;
  figi?: string;
  instrumentType?: InstrumentType;
  isMarginCall: boolean;
  date: string;
  operationType?: OperationTypeWithCommission;
};

export type OrdersResponse = {
  trackingId: string;
  status: string;
  payload: Order[];
};

export type Order = {
  orderId: string;
  figi: string;
  operation: OperationType;
  status: OrderStatus;
  requestedLots: number;
  executedLots: number;
  type: OrderType;
  price: number;
};

export type LimitOrderRequest = {
  lots: number;
  operation: OperationType;
  price: number;
};

export type LimitOrderResponse = {
  trackingId: string;
  status: string;
  payload: PlacedLimitOrder;
};

export type PlacedLimitOrder = {
  orderId: string;
  operation: OperationType;
  status: OrderStatus;
  rejectReason?: string;
  requestedLots: number;
  executedLots: number;
  commission?: MoneyAmount;
};

export type TradeStatus = {};

export type OperationType = {};

export type OperationTypeWithCommission = {};

export type OperationStatus = {};

export type OrderStatus = {};

export type OrderType = {};

export type SandboxSetCurrencyBalanceRequest = {
  currency: SandboxCurrency;
  balance: number;
};

export type SandboxSetPositionBalanceRequest = {
  figi?: string;
  balance: number;
};

export type MarketInstrumentListResponse = {
  trackingId: string;
  status: string;
  payload: MarketInstrumentList;
};

export type MarketInstrumentList = {
  total: number;
  instruments: MarketInstrument[];
};

export type MarketInstrumentResponse = {
  trackingId: string;
  status: string;
  payload: MarketInstrument;
};

export type MarketInstrument = {
  figi: string;
  ticker: string;
  isin?: string;
  minPriceIncrement?: number;
  lot: number;
  currency?: Currency;
  name: string;
};

export type SandboxCurrency = {};

export type Currency = {};

export type InstrumentType = {};

export type ErrorPayload = {
  message?: string;
  code?: string;
};
