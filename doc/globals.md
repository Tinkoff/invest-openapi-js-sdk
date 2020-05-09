[@tinkoff/invest-openapi-js-sdk - v1.2.7](README.md) › [Globals](globals.md)

# @tinkoff/invest-openapi-js-sdk - v1.2.7

## Index

### Classes

* [OpenAPI](classes/openapi.md)

### Type aliases

* [BrokerAccountType](globals.md#brokeraccounttype)
* [Candle](globals.md#candle)
* [CandleResolution](globals.md#candleresolution)
* [CandleStreaming](globals.md#candlestreaming)
* [Candles](globals.md#candles)
* [CandlesResponse](globals.md#candlesresponse)
* [Currencies](globals.md#currencies)
* [Currency](globals.md#currency)
* [CurrencyPosition](globals.md#currencyposition)
* [Depth](globals.md#depth)
* [Dict](globals.md#dict)
* [Empty](globals.md#empty)
* [Error](globals.md#error)
* [ErrorPayload](globals.md#errorpayload)
* [FIGI](globals.md#figi)
* [HttpMethod](globals.md#httpmethod)
* [InstrumentId](globals.md#instrumentid)
* [InstrumentType](globals.md#instrumenttype)
* [Interval](globals.md#interval)
* [LimitOrderParams](globals.md#limitorderparams)
* [LimitOrderRequest](globals.md#limitorderrequest)
* [LimitOrderResponse](globals.md#limitorderresponse)
* [MarketInstrument](globals.md#marketinstrument)
* [MarketInstrumentList](globals.md#marketinstrumentlist)
* [MarketInstrumentListResponse](globals.md#marketinstrumentlistresponse)
* [MarketInstrumentResponse](globals.md#marketinstrumentresponse)
* [MarketOrderRequest](globals.md#marketorderrequest)
* [MarketOrderResponse](globals.md#marketorderresponse)
* [MoneyAmount](globals.md#moneyamount)
* [OpenApiConfig](globals.md#openapiconfig)
* [Operation](globals.md#operation)
* [OperationStatus](globals.md#operationstatus)
* [OperationTrade](globals.md#operationtrade)
* [OperationType](globals.md#operationtype)
* [OperationTypeWithCommission](globals.md#operationtypewithcommission)
* [Operations](globals.md#operations)
* [OperationsResponse](globals.md#operationsresponse)
* [Order](globals.md#order)
* [OrderResponse](globals.md#orderresponse)
* [OrderStatus](globals.md#orderstatus)
* [OrderType](globals.md#ordertype)
* [Orderbook](globals.md#orderbook)
* [OrderbookResponse](globals.md#orderbookresponse)
* [OrderbookStreaming](globals.md#orderbookstreaming)
* [OrdersResponse](globals.md#ordersresponse)
* [PlacedLimitOrder](globals.md#placedlimitorder)
* [PlacedMarketOrder](globals.md#placedmarketorder)
* [Portfolio](globals.md#portfolio)
* [PortfolioCurrenciesResponse](globals.md#portfoliocurrenciesresponse)
* [PortfolioPosition](globals.md#portfolioposition)
* [PortfolioResponse](globals.md#portfolioresponse)
* [RequestConfig](globals.md#requestconfig)
* [SandboxAccount](globals.md#sandboxaccount)
* [SandboxCurrency](globals.md#sandboxcurrency)
* [SandboxRegisterRequest](globals.md#sandboxregisterrequest)
* [SandboxRegisterResponse](globals.md#sandboxregisterresponse)
* [SandboxSetCurrencyBalanceRequest](globals.md#sandboxsetcurrencybalancerequest)
* [SandboxSetPositionBalanceRequest](globals.md#sandboxsetpositionbalancerequest)
* [SearchMarketInstrument](globals.md#searchmarketinstrument)
* [SearchMarketInstrumentResponse](globals.md#searchmarketinstrumentresponse)
* [SocketEventType](globals.md#socketeventtype)
* [TradeStatus](globals.md#tradestatus)
* [UserAccount](globals.md#useraccount)
* [UserAccounts](globals.md#useraccounts)
* [UserAccountsResponse](globals.md#useraccountsresponse)

### Functions

* [getQueryString](globals.md#getquerystring)

## Type aliases

###  BrokerAccountType

Ƭ **BrokerAccountType**: *"Tinkoff" | "TinkoffIis"*

___

###  Candle

Ƭ **Candle**: *object*

#### Type declaration:

* **c**: *number*

* **figi**: *string*

* **h**: *number*

* **interval**: *[CandleResolution](globals.md#candleresolution)*

* **l**: *number*

* **o**: *number*

* **time**: *string*

* **v**: *number*

___

###  CandleResolution

Ƭ **CandleResolution**: *"1min" | "2min" | "3min" | "5min" | "10min" | "15min" | "30min" | "hour" | "day" | "week" | "month"*

___

###  CandleStreaming

Ƭ **CandleStreaming**: *object*

#### Type declaration:

* **c**: *number*

* **figi**: *string*

* **h**: *number*

* **interval**: *[Interval](globals.md#interval)*

* **l**: *number*

* **o**: *number*

* **time**: *string*

* **v**: *number*

___

###  Candles

Ƭ **Candles**: *object*

#### Type declaration:

* **candles**: *[Candle](globals.md#candle)[]*

* **figi**: *string*

* **interval**: *[CandleResolution](globals.md#candleresolution)*

___

###  CandlesResponse

Ƭ **CandlesResponse**: *object*

#### Type declaration:

* **payload**: *[Candles](globals.md#candles)*

* **status**: *string*

* **trackingId**: *string*

___

###  Currencies

Ƭ **Currencies**: *object*

#### Type declaration:

* **currencies**: *[CurrencyPosition](globals.md#currencyposition)[]*

___

###  Currency

Ƭ **Currency**: *"RUB" | "USD" | "EUR" | "GBP" | "HKD" | "CHF" | "JPY" | "CNY" | "TRY"*

___

###  CurrencyPosition

Ƭ **CurrencyPosition**: *object*

#### Type declaration:

* **balance**: *number*

* **blocked**? : *undefined | number*

* **currency**: *[Currency](globals.md#currency)*

___

###  Depth

Ƭ **Depth**: *1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10*

___

###  Dict

Ƭ **Dict**: *object*

#### Type declaration:

* \[ **x**: *string*\]: T

___

###  Empty

Ƭ **Empty**: *object*

* This file was generated automatically by @tinkoff/invest-types-generator
* do not try amending it manually

#### Type declaration:

* **payload**: *any*

* **status**: *string*

* **trackingId**: *string*

___

###  Error

Ƭ **Error**: *object*

#### Type declaration:

* **payload**: *[ErrorPayload](globals.md#errorpayload)*

* **status**: *string*

* **trackingId**: *string*

___

###  ErrorPayload

Ƭ **ErrorPayload**: *object*

#### Type declaration:

* **code**? : *undefined | string*

* **message**? : *undefined | string*

___

###  FIGI

Ƭ **FIGI**: *object*

#### Type declaration:

* **figi**: *string*

___

###  HttpMethod

Ƭ **HttpMethod**: *"get" | "post"*

___

###  InstrumentId

Ƭ **InstrumentId**: *object | object*

___

###  InstrumentType

Ƭ **InstrumentType**: *"Stock" | "Currency" | "Bond" | "Etf"*

___

###  Interval

Ƭ **Interval**: *"1min" | "2min" | "3min" | "5min" | "10min" | "15min" | "30min" | "hour" | "2hour" | "4hour" | "day" | "week" | "month"*

___

###  LimitOrderParams

Ƭ **LimitOrderParams**: *object*

#### Type declaration:

* **figi**: *string*

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **price**: *number*

___

###  LimitOrderRequest

Ƭ **LimitOrderRequest**: *object*

#### Type declaration:

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **price**: *number*

___

###  LimitOrderResponse

Ƭ **LimitOrderResponse**: *object*

#### Type declaration:

* **payload**: *[PlacedLimitOrder](globals.md#placedlimitorder)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrument

Ƭ **MarketInstrument**: *object*

#### Type declaration:

* **currency**? : *[Currency](globals.md#currency)*

* **figi**: *string*

* **isin**? : *undefined | string*

* **lot**: *number*

* **minPriceIncrement**? : *undefined | number*

* **name**: *string*

* **ticker**: *string*

* **type**: *[InstrumentType](globals.md#instrumenttype)*

___

###  MarketInstrumentList

Ƭ **MarketInstrumentList**: *object*

#### Type declaration:

* **instruments**: *[MarketInstrument](globals.md#marketinstrument)[]*

* **total**: *number*

___

###  MarketInstrumentListResponse

Ƭ **MarketInstrumentListResponse**: *object*

#### Type declaration:

* **payload**: *[MarketInstrumentList](globals.md#marketinstrumentlist)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrumentResponse

Ƭ **MarketInstrumentResponse**: *object*

#### Type declaration:

* **payload**: *[MarketInstrument](globals.md#marketinstrument)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketOrderRequest

Ƭ **MarketOrderRequest**: *object*

#### Type declaration:

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

___

###  MarketOrderResponse

Ƭ **MarketOrderResponse**: *object*

#### Type declaration:

* **payload**: *[PlacedMarketOrder](globals.md#placedmarketorder)*

* **status**: *string*

* **trackingId**: *string*

___

###  MoneyAmount

Ƭ **MoneyAmount**: *object*

#### Type declaration:

* **currency**: *[Currency](globals.md#currency)*

* **value**: *number*

___

###  OpenApiConfig

Ƭ **OpenApiConfig**: *object*

#### Type declaration:

* **apiURL**: *string*

* **secretToken**: *string*

* **socketURL**: *string*

___

###  Operation

Ƭ **Operation**: *object*

#### Type declaration:

* **commission**? : *[MoneyAmount](globals.md#moneyamount)*

* **currency**: *[Currency](globals.md#currency)*

* **date**: *string*

* **figi**? : *undefined | string*

* **id**: *string*

* **instrumentType**? : *[InstrumentType](globals.md#instrumenttype)*

* **isMarginCall**: *boolean*

* **operationType**? : *[OperationTypeWithCommission](globals.md#operationtypewithcommission)*

* **payment**: *number*

* **price**? : *undefined | number*

* **quantity**? : *undefined | number*

* **status**: *[OperationStatus](globals.md#operationstatus)*

* **trades**? : *[OperationTrade](globals.md#operationtrade)[]*

___

###  OperationStatus

Ƭ **OperationStatus**: *"Done" | "Decline" | "Progress"*

___

###  OperationTrade

Ƭ **OperationTrade**: *object*

#### Type declaration:

* **date**: *string*

* **price**: *number*

* **quantity**: *number*

* **tradeId**: *string*

___

###  OperationType

Ƭ **OperationType**: *"Buy" | "Sell"*

___

###  OperationTypeWithCommission

Ƭ **OperationTypeWithCommission**: *"Buy" | "BuyCard" | "Sell" | "BrokerCommission" | "ExchangeCommission" | "ServiceCommission" | "MarginCommission" | "OtherCommission" | "PayIn" | "PayOut" | "Tax" | "TaxLucre" | "TaxDividend" | "TaxCoupon" | "TaxBack" | "Repayment" | "PartRepayment" | "Coupon" | "Dividend" | "SecurityIn" | "SecurityOut"*

___

###  Operations

Ƭ **Operations**: *object*

#### Type declaration:

* **operations**: *[Operation](globals.md#operation)[]*

___

###  OperationsResponse

Ƭ **OperationsResponse**: *object*

#### Type declaration:

* **payload**: *[Operations](globals.md#operations)*

* **status**: *string*

* **trackingId**: *string*

___

###  Order

Ƭ **Order**: *object*

#### Type declaration:

* **executedLots**: *number*

* **figi**: *string*

* **operation**: *[OperationType](globals.md#operationtype)*

* **orderId**: *string*

* **price**: *number*

* **requestedLots**: *number*

* **status**: *[OrderStatus](globals.md#orderstatus)*

* **type**: *[OrderType](globals.md#ordertype)*

___

###  OrderResponse

Ƭ **OrderResponse**: *object*

#### Type declaration:

* **price**: *number*

* **quantity**: *number*

___

###  OrderStatus

Ƭ **OrderStatus**: *"New" | "PartiallyFill" | "Fill" | "Cancelled" | "Replaced" | "PendingCancel" | "Rejected" | "PendingReplace" | "PendingNew"*

___

###  OrderType

Ƭ **OrderType**: *"Limit" | "Market"*

___

###  Orderbook

Ƭ **Orderbook**: *object*

#### Type declaration:

* **asks**: *[OrderResponse](globals.md#orderresponse)[]*

* **bids**: *[OrderResponse](globals.md#orderresponse)[]*

* **closePrice**? : *undefined | number*

* **depth**: *number*

* **faceValue**? : *undefined | number*

* **figi**: *string*

* **lastPrice**? : *undefined | number*

* **limitDown**? : *undefined | number*

* **limitUp**? : *undefined | number*

* **minPriceIncrement**: *number*

* **tradeStatus**: *[TradeStatus](globals.md#tradestatus)*

___

###  OrderbookResponse

Ƭ **OrderbookResponse**: *object*

#### Type declaration:

* **payload**: *[Orderbook](globals.md#orderbook)*

* **status**: *string*

* **trackingId**: *string*

___

###  OrderbookStreaming

Ƭ **OrderbookStreaming**: *object*

#### Type declaration:

* **bids**: *Array‹[number, number]›*

* **depth**: *[Depth](globals.md#depth)*

* **figi**: *string*

___

###  OrdersResponse

Ƭ **OrdersResponse**: *object*

#### Type declaration:

* **payload**: *[Order](globals.md#order)[]*

* **status**: *string*

* **trackingId**: *string*

___

###  PlacedLimitOrder

Ƭ **PlacedLimitOrder**: *object*

#### Type declaration:

* **commission**? : *[MoneyAmount](globals.md#moneyamount)*

* **executedLots**: *number*

* **message**? : *undefined | string*

* **operation**: *[OperationType](globals.md#operationtype)*

* **orderId**: *string*

* **rejectReason**? : *undefined | string*

* **requestedLots**: *number*

* **status**: *[OrderStatus](globals.md#orderstatus)*

___

###  PlacedMarketOrder

Ƭ **PlacedMarketOrder**: *object*

#### Type declaration:

* **commission**? : *[MoneyAmount](globals.md#moneyamount)*

* **executedLots**: *number*

* **message**? : *undefined | string*

* **operation**: *[OperationType](globals.md#operationtype)*

* **orderId**: *string*

* **rejectReason**? : *undefined | string*

* **requestedLots**: *number*

* **status**: *[OrderStatus](globals.md#orderstatus)*

___

###  Portfolio

Ƭ **Portfolio**: *object*

#### Type declaration:

* **positions**: *[PortfolioPosition](globals.md#portfolioposition)[]*

___

###  PortfolioCurrenciesResponse

Ƭ **PortfolioCurrenciesResponse**: *object*

#### Type declaration:

* **payload**: *[Currencies](globals.md#currencies)*

* **status**: *string*

* **trackingId**: *string*

___

###  PortfolioPosition

Ƭ **PortfolioPosition**: *object*

#### Type declaration:

* **averagePositionPrice**? : *[MoneyAmount](globals.md#moneyamount)*

* **averagePositionPriceNoNkd**? : *[MoneyAmount](globals.md#moneyamount)*

* **balance**: *number*

* **blocked**? : *undefined | number*

* **expectedYield**? : *[MoneyAmount](globals.md#moneyamount)*

* **figi**: *string*

* **instrumentType**: *[InstrumentType](globals.md#instrumenttype)*

* **isin**? : *undefined | string*

* **lots**: *number*

* **name**: *string*

* **ticker**? : *undefined | string*

___

###  PortfolioResponse

Ƭ **PortfolioResponse**: *object*

#### Type declaration:

* **payload**: *[Portfolio](globals.md#portfolio)*

* **status**: *string*

* **trackingId**: *string*

___

###  RequestConfig

Ƭ **RequestConfig**: *object*

#### Type declaration:

* **method**? : *[HttpMethod](globals.md#httpmethod)*

* **params**? : *P*

___

###  SandboxAccount

Ƭ **SandboxAccount**: *object*

#### Type declaration:

* **brokerAccountId**: *string*

* **brokerAccountType**: *[BrokerAccountType](globals.md#brokeraccounttype)*

___

###  SandboxCurrency

Ƭ **SandboxCurrency**: *"RUB" | "USD" | "EUR" | "GBP" | "HKD" | "CHF" | "JPY" | "CNY" | "TRY"*

___

###  SandboxRegisterRequest

Ƭ **SandboxRegisterRequest**: *object*

#### Type declaration:

* **brokerAccountType**? : *[BrokerAccountType](globals.md#brokeraccounttype)*

___

###  SandboxRegisterResponse

Ƭ **SandboxRegisterResponse**: *object*

#### Type declaration:

* **payload**: *[SandboxAccount](globals.md#sandboxaccount)*

* **status**: *string*

* **trackingId**: *string*

___

###  SandboxSetCurrencyBalanceRequest

Ƭ **SandboxSetCurrencyBalanceRequest**: *object*

#### Type declaration:

* **balance**: *number*

* **currency**: *[SandboxCurrency](globals.md#sandboxcurrency)*

___

###  SandboxSetPositionBalanceRequest

Ƭ **SandboxSetPositionBalanceRequest**: *object*

#### Type declaration:

* **balance**: *number*

* **figi**? : *undefined | string*

___

###  SearchMarketInstrument

Ƭ **SearchMarketInstrument**: *object*

#### Type declaration:

* **currency**? : *[Currency](globals.md#currency)*

* **figi**: *string*

* **isin**? : *undefined | string*

* **lot**: *number*

* **minPriceIncrement**? : *undefined | number*

* **name**: *string*

* **ticker**: *string*

* **type**: *[InstrumentType](globals.md#instrumenttype)*

___

###  SearchMarketInstrumentResponse

Ƭ **SearchMarketInstrumentResponse**: *object*

#### Type declaration:

* **payload**: *[SearchMarketInstrument](globals.md#searchmarketinstrument)*

* **status**: *string*

* **trackingId**: *string*

___

###  SocketEventType

Ƭ **SocketEventType**: *"orderbook" | "candle" | "instrument_info"*

___

###  TradeStatus

Ƭ **TradeStatus**: *"NormalTrading" | "NotAvailableForTrading"*

___

###  UserAccount

Ƭ **UserAccount**: *object*

#### Type declaration:

* **brokerAccountId**: *string*

* **brokerAccountType**: *[BrokerAccountType](globals.md#brokeraccounttype)*

___

###  UserAccounts

Ƭ **UserAccounts**: *object*

#### Type declaration:

* **accounts**: *[UserAccount](globals.md#useraccount)[]*

___

###  UserAccountsResponse

Ƭ **UserAccountsResponse**: *object*

#### Type declaration:

* **payload**: *[UserAccounts](globals.md#useraccounts)*

* **status**: *string*

* **trackingId**: *string*

## Functions

###  getQueryString

▸ **getQueryString**(`params`: Record‹string, string | number›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Record‹string, string &#124; number› |

**Returns:** *string*
