/**
** This file was generated automatically by @tinkoff/invest-types-generator
** do not try amending it manually
**/

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

export type UserAccountsResponse = {
    trackingId: string;
    status: string;
    payload: UserAccounts;
};

export type UserAccounts = {
    accounts: UserAccount[];
};

export type UserAccount = {
    brokerAccountType: BrokerAccountType;
    brokerAccountId: string;
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
    expectedYield?: MoneyAmount;
    lots: number;
    averagePositionPrice?: MoneyAmount;
    averagePositionPriceNoNkd?: MoneyAmount;
    name: string;
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
    faceValue?: number;
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
    quantityExecuted?: number;
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
    message?: string;
    requestedLots: number;
    executedLots: number;
    commission?: MoneyAmount;
};

export type MarketOrderRequest = {
    lots: number;
    operation: OperationType;
};

export type MarketOrderResponse = {
    trackingId: string;
    status: string;
    payload: PlacedMarketOrder;
};

export type PlacedMarketOrder = {
    orderId: string;
    operation: OperationType;
    status: OrderStatus;
    rejectReason?: string;
    message?: string;
    requestedLots: number;
    executedLots: number;
    commission?: MoneyAmount;
};

export type TradeStatus = "NormalTrading" | "NotAvailableForTrading";

export type OperationType = "Buy" | "Sell";

export type OperationTypeWithCommission = "Buy" | "BuyCard" | "Sell" | "BrokerCommission" | "ExchangeCommission" | "ServiceCommission" | "MarginCommission" | "OtherCommission" | "PayIn" | "PayOut" | "Tax" | "TaxLucre" | "TaxDividend" | "TaxCoupon" | "TaxBack" | "Repayment" | "PartRepayment" | "Coupon" | "Dividend" | "SecurityIn" | "SecurityOut";

export type OperationStatus = "Done" | "Decline" | "Progress";

export type CandleResolution = "1min" | "2min" | "3min" | "5min" | "10min" | "15min" | "30min" | "hour" | "day" | "week" | "month";

export type OrderStatus = "New" | "PartiallyFill" | "Fill" | "Cancelled" | "Replaced" | "PendingCancel" | "Rejected" | "PendingReplace" | "PendingNew";

export type OrderType = "Limit" | "Market";

export type SandboxRegisterRequest = {
    brokerAccountType?: BrokerAccountType;
};

export type SandboxRegisterResponse = {
    trackingId: string;
    status: string;
    payload: SandboxAccount;
};

export type SandboxAccount = {
    brokerAccountType: BrokerAccountType;
    brokerAccountId: string;
};

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

export type SearchMarketInstrumentResponse = {
    trackingId: string;
    status: string;
    payload: SearchMarketInstrument;
};

export type MarketInstrumentResponse = {
    trackingId: string;
    status: string;
    payload: MarketInstrument;
};

export type SearchMarketInstrument = {
    figi: string;
    ticker: string;
    isin?: string;
    minPriceIncrement?: number;
    lot: number;
    currency?: Currency;
    name: string;
    type: InstrumentType;
};

export type MarketInstrument = {
    figi: string;
    ticker: string;
    isin?: string;
    minPriceIncrement?: number;
    lot: number;
    minQuantity?: number;
    currency?: Currency;
    name: string;
    type: InstrumentType;
};

export type SandboxCurrency = "RUB" | "USD" | "EUR" | "GBP" | "HKD" | "CHF" | "JPY" | "CNY" | "TRY";

export type Currency = "RUB" | "USD" | "EUR" | "GBP" | "HKD" | "CHF" | "JPY" | "CNY" | "TRY";

export type InstrumentType = "Stock" | "Currency" | "Bond" | "Etf";

export type BrokerAccountType = "Tinkoff" | "TinkoffIis";

export type ErrorPayload = {
    message?: string;
    code?: string;
};
