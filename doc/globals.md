[@tinkoff/invest-openapi-js-sdk - v1.2.6](README.md) › [Globals](globals.md)

# @tinkoff/invest-openapi-js-sdk - v1.2.6

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

*Defined in [src/domain.ts:311](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L311)*

___

###  Candle

Ƭ **Candle**: *object*

*Defined in [src/domain.ts:115](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L115)*

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

*Defined in [src/domain.ts:229](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L229)*

___

###  CandleStreaming

Ƭ **CandleStreaming**: *object*

*Defined in [src/types.ts:28](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/types.ts#L28)*

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

*Defined in [src/domain.ts:109](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L109)*

#### Type declaration:

* **candles**: *[Candle](globals.md#candle)[]*

* **figi**: *string*

* **interval**: *[CandleResolution](globals.md#candleresolution)*

___

###  CandlesResponse

Ƭ **CandlesResponse**: *object*

*Defined in [src/domain.ts:103](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L103)*

#### Type declaration:

* **payload**: *[Candles](globals.md#candles)*

* **status**: *string*

* **trackingId**: *string*

___

###  Currencies

Ƭ **Currencies**: *object*

*Defined in [src/domain.ts:49](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L49)*

#### Type declaration:

* **currencies**: *[CurrencyPosition](globals.md#currencyposition)[]*

___

###  Currency

Ƭ **Currency**: *"RUB" | "USD" | "EUR" | "GBP" | "HKD" | "CHF" | "JPY" | "CNY" | "TRY"*

*Defined in [src/domain.ts:307](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L307)*

___

###  CurrencyPosition

Ƭ **CurrencyPosition**: *object*

*Defined in [src/domain.ts:53](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L53)*

#### Type declaration:

* **balance**: *number*

* **blocked**? : *undefined | number*

* **currency**: *[Currency](globals.md#currency)*

___

###  Depth

Ƭ **Depth**: *1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10*

*Defined in [src/types.ts:18](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/types.ts#L18)*

___

###  Dict

Ƭ **Dict**: *object*

*Defined in [src/types.ts:21](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/types.ts#L21)*

#### Type declaration:

* \[ **x**: *string*\]: T

___

###  Empty

Ƭ **Empty**: *object*

*Defined in [src/domain.ts:6](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L6)*

* This file was generated automatically by @tinkoff/invest-types-generator
* do not try amending it manually

#### Type declaration:

* **payload**: *any*

* **status**: *string*

* **trackingId**: *string*

___

###  Error

Ƭ **Error**: *object*

*Defined in [src/domain.ts:12](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L12)*

#### Type declaration:

* **payload**: *[ErrorPayload](globals.md#errorpayload)*

* **status**: *string*

* **trackingId**: *string*

___

###  ErrorPayload

Ƭ **ErrorPayload**: *object*

*Defined in [src/domain.ts:313](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L313)*

#### Type declaration:

* **code**? : *undefined | string*

* **message**? : *undefined | string*

___

###  HttpMethod

Ƭ **HttpMethod**: *"get" | "post"*

*Defined in [src/types.ts:19](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/types.ts#L19)*

___

###  InstrumentId

Ƭ **InstrumentId**: *object | object*

*Defined in [src/types.ts:27](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/types.ts#L27)*

___

###  InstrumentType

Ƭ **InstrumentType**: *"Stock" | "Currency" | "Bond" | "Etf"*

*Defined in [src/domain.ts:309](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L309)*

___

###  Interval

Ƭ **Interval**: *"1min" | "2min" | "3min" | "5min" | "10min" | "15min" | "30min" | "hour" | "2hour" | "4hour" | "day" | "week" | "month"*

*Defined in [src/types.ts:3](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/types.ts#L3)*

___

###  LimitOrderParams

Ƭ **LimitOrderParams**: *object*

*Defined in [src/types.ts:39](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/types.ts#L39)*

#### Type declaration:

* **figi**: *string*

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **price**: *number*

___

###  LimitOrderRequest

Ƭ **LimitOrderRequest**: *object*

*Defined in [src/domain.ts:176](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L176)*

#### Type declaration:

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **price**: *number*

___

###  LimitOrderResponse

Ƭ **LimitOrderResponse**: *object*

*Defined in [src/domain.ts:182](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L182)*

#### Type declaration:

* **payload**: *[PlacedLimitOrder](globals.md#placedlimitorder)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrument

Ƭ **MarketInstrument**: *object*

*Defined in [src/domain.ts:294](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L294)*

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

*Defined in [src/domain.ts:266](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L266)*

#### Type declaration:

* **instruments**: *[MarketInstrument](globals.md#marketinstrument)[]*

* **total**: *number*

___

###  MarketInstrumentListResponse

Ƭ **MarketInstrumentListResponse**: *object*

*Defined in [src/domain.ts:260](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L260)*

#### Type declaration:

* **payload**: *[MarketInstrumentList](globals.md#marketinstrumentlist)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrumentResponse

Ƭ **MarketInstrumentResponse**: *object*

*Defined in [src/domain.ts:277](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L277)*

#### Type declaration:

* **payload**: *[MarketInstrument](globals.md#marketinstrument)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketOrderRequest

Ƭ **MarketOrderRequest**: *object*

*Defined in [src/domain.ts:199](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L199)*

#### Type declaration:

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

___

###  MarketOrderResponse

Ƭ **MarketOrderResponse**: *object*

*Defined in [src/domain.ts:204](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L204)*

#### Type declaration:

* **payload**: *[PlacedMarketOrder](globals.md#placedmarketorder)*

* **status**: *string*

* **trackingId**: *string*

___

###  MoneyAmount

Ƭ **MoneyAmount**: *object*

*Defined in [src/domain.ts:73](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L73)*

#### Type declaration:

* **currency**: *[Currency](globals.md#currency)*

* **value**: *number*

___

###  OpenApiConfig

Ƭ **OpenApiConfig**: *object*

*Defined in [src/OpenAPI.ts:39](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L39)*

#### Type declaration:

* **apiURL**: *string*

* **secretToken**: *string*

* **socketURL**: *string*

___

###  Operation

Ƭ **Operation**: *object*

*Defined in [src/domain.ts:143](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L143)*

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

*Defined in [src/domain.ts:227](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L227)*

___

###  OperationTrade

Ƭ **OperationTrade**: *object*

*Defined in [src/domain.ts:136](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L136)*

#### Type declaration:

* **date**: *string*

* **price**: *number*

* **quantity**: *number*

* **tradeId**: *string*

___

###  OperationType

Ƭ **OperationType**: *"Buy" | "Sell"*

*Defined in [src/domain.ts:223](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L223)*

___

###  OperationTypeWithCommission

Ƭ **OperationTypeWithCommission**: *"Buy" | "BuyCard" | "Sell" | "BrokerCommission" | "ExchangeCommission" | "ServiceCommission" | "MarginCommission" | "OtherCommission" | "PayIn" | "PayOut" | "Tax" | "TaxLucre" | "TaxDividend" | "TaxCoupon" | "TaxBack" | "Repayment" | "PartRepayment" | "Coupon" | "Dividend" | "SecurityIn" | "SecurityOut"*

*Defined in [src/domain.ts:225](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L225)*

___

###  Operations

Ƭ **Operations**: *object*

*Defined in [src/domain.ts:132](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L132)*

#### Type declaration:

* **operations**: *[Operation](globals.md#operation)[]*

___

###  OperationsResponse

Ƭ **OperationsResponse**: *object*

*Defined in [src/domain.ts:126](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L126)*

#### Type declaration:

* **payload**: *[Operations](globals.md#operations)*

* **status**: *string*

* **trackingId**: *string*

___

###  Order

Ƭ **Order**: *object*

*Defined in [src/domain.ts:165](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L165)*

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

*Defined in [src/domain.ts:98](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L98)*

#### Type declaration:

* **price**: *number*

* **quantity**: *number*

___

###  OrderStatus

Ƭ **OrderStatus**: *"New" | "PartiallyFill" | "Fill" | "Cancelled" | "Replaced" | "PendingCancel" | "Rejected" | "PendingReplace" | "PendingNew"*

*Defined in [src/domain.ts:231](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L231)*

___

###  OrderType

Ƭ **OrderType**: *"Limit" | "Market"*

*Defined in [src/domain.ts:233](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L233)*

___

###  Orderbook

Ƭ **Orderbook**: *object*

*Defined in [src/domain.ts:84](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L84)*

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

*Defined in [src/domain.ts:78](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L78)*

#### Type declaration:

* **payload**: *[Orderbook](globals.md#orderbook)*

* **status**: *string*

* **trackingId**: *string*

___

###  OrderbookStreaming

Ƭ **OrderbookStreaming**: *object*

*Defined in [src/types.ts:22](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/types.ts#L22)*

#### Type declaration:

* **bids**: *Array‹[number, number]›*

* **depth**: *[Depth](globals.md#depth)*

* **figi**: *string*

___

###  OrdersResponse

Ƭ **OrdersResponse**: *object*

*Defined in [src/domain.ts:159](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L159)*

#### Type declaration:

* **payload**: *[Order](globals.md#order)[]*

* **status**: *string*

* **trackingId**: *string*

___

###  PlacedLimitOrder

Ƭ **PlacedLimitOrder**: *object*

*Defined in [src/domain.ts:188](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L188)*

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

*Defined in [src/domain.ts:210](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L210)*

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

*Defined in [src/domain.ts:24](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L24)*

#### Type declaration:

* **positions**: *[PortfolioPosition](globals.md#portfolioposition)[]*

___

###  PortfolioCurrenciesResponse

Ƭ **PortfolioCurrenciesResponse**: *object*

*Defined in [src/domain.ts:43](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L43)*

#### Type declaration:

* **payload**: *[Currencies](globals.md#currencies)*

* **status**: *string*

* **trackingId**: *string*

___

###  PortfolioPosition

Ƭ **PortfolioPosition**: *object*

*Defined in [src/domain.ts:59](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L59)*

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

*Defined in [src/domain.ts:18](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L18)*

#### Type declaration:

* **payload**: *[Portfolio](globals.md#portfolio)*

* **status**: *string*

* **trackingId**: *string*

___

###  RequestConfig

Ƭ **RequestConfig**: *object*

*Defined in [src/OpenAPI.ts:45](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L45)*

#### Type declaration:

* **method**? : *[HttpMethod](globals.md#httpmethod)*

* **params**? : *P*

___

###  SandboxAccount

Ƭ **SandboxAccount**: *object*

*Defined in [src/domain.ts:245](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L245)*

#### Type declaration:

* **brokerAccountId**: *string*

* **brokerAccountType**: *[BrokerAccountType](globals.md#brokeraccounttype)*

___

###  SandboxCurrency

Ƭ **SandboxCurrency**: *"RUB" | "USD" | "EUR" | "GBP" | "HKD" | "CHF" | "JPY" | "CNY" | "TRY"*

*Defined in [src/domain.ts:305](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L305)*

___

###  SandboxRegisterRequest

Ƭ **SandboxRegisterRequest**: *object*

*Defined in [src/domain.ts:235](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L235)*

#### Type declaration:

* **brokerAccountType**? : *[BrokerAccountType](globals.md#brokeraccounttype)*

___

###  SandboxRegisterResponse

Ƭ **SandboxRegisterResponse**: *object*

*Defined in [src/domain.ts:239](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L239)*

#### Type declaration:

* **payload**: *[SandboxAccount](globals.md#sandboxaccount)*

* **status**: *string*

* **trackingId**: *string*

___

###  SandboxSetCurrencyBalanceRequest

Ƭ **SandboxSetCurrencyBalanceRequest**: *object*

*Defined in [src/domain.ts:250](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L250)*

#### Type declaration:

* **balance**: *number*

* **currency**: *[SandboxCurrency](globals.md#sandboxcurrency)*

___

###  SandboxSetPositionBalanceRequest

Ƭ **SandboxSetPositionBalanceRequest**: *object*

*Defined in [src/domain.ts:255](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L255)*

#### Type declaration:

* **balance**: *number*

* **figi**? : *undefined | string*

___

###  SearchMarketInstrument

Ƭ **SearchMarketInstrument**: *object*

*Defined in [src/domain.ts:283](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L283)*

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

*Defined in [src/domain.ts:271](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L271)*

#### Type declaration:

* **payload**: *[SearchMarketInstrument](globals.md#searchmarketinstrument)*

* **status**: *string*

* **trackingId**: *string*

___

###  SocketEventType

Ƭ **SocketEventType**: *"orderbook" | "candle" | "instrument_info"*

*Defined in [src/types.ts:20](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/types.ts#L20)*

___

###  TradeStatus

Ƭ **TradeStatus**: *"NormalTrading" | "NotAvailableForTrading"*

*Defined in [src/domain.ts:221](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L221)*

___

###  UserAccount

Ƭ **UserAccount**: *object*

*Defined in [src/domain.ts:38](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L38)*

#### Type declaration:

* **brokerAccountId**: *string*

* **brokerAccountType**: *[BrokerAccountType](globals.md#brokeraccounttype)*

___

###  UserAccounts

Ƭ **UserAccounts**: *object*

*Defined in [src/domain.ts:34](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L34)*

#### Type declaration:

* **accounts**: *[UserAccount](globals.md#useraccount)[]*

___

###  UserAccountsResponse

Ƭ **UserAccountsResponse**: *object*

*Defined in [src/domain.ts:28](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/domain.ts#L28)*

#### Type declaration:

* **payload**: *[UserAccounts](globals.md#useraccounts)*

* **status**: *string*

* **trackingId**: *string*

## Functions

###  getQueryString

▸ **getQueryString**(`params`: Record‹string, string | number›): *string*

*Defined in [src/OpenAPI.ts:32](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Record‹string, string &#124; number› |

**Returns:** *string*
