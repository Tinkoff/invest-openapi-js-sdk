[@tinkoff/invest-openapi-js-sdk](README.md) › [Globals](globals.md)

# @tinkoff/invest-openapi-js-sdk

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

### Variables

* [WebSocket](globals.md#const-websocket)

### Functions

* [getQueryString](globals.md#getquerystring)
* [once](globals.md#once)

## Type aliases

###  BrokerAccountType

Ƭ **BrokerAccountType**: *object*

Defined in domain.ts:311

Defined in src/domain.ts:311

#### Type declaration:

___

###  Candle

Ƭ **Candle**: *object*

Defined in domain.ts:115

Defined in src/domain.ts:115

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

Ƭ **CandleResolution**: *object*

Defined in domain.ts:229

Defined in src/domain.ts:229

#### Type declaration:

___

###  CandleStreaming

Ƭ **CandleStreaming**: *object*

Defined in OpenAPI.ts:43

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

Defined in domain.ts:109

Defined in src/domain.ts:109

#### Type declaration:

* **candles**: *[Candle](globals.md#candle)[]*

* **figi**: *string*

* **interval**: *[CandleResolution](globals.md#candleresolution)*

___

###  CandlesResponse

Ƭ **CandlesResponse**: *object*

Defined in domain.ts:103

Defined in src/domain.ts:103

#### Type declaration:

* **payload**: *[Candles](globals.md#candles)*

* **status**: *string*

* **trackingId**: *string*

___

###  Currencies

Ƭ **Currencies**: *object*

Defined in domain.ts:49

Defined in src/domain.ts:49

#### Type declaration:

* **currencies**: *[CurrencyPosition](globals.md#currencyposition)[]*

___

###  Currency

Ƭ **Currency**: *object*

Defined in domain.ts:307

Defined in src/domain.ts:307

#### Type declaration:

___

###  CurrencyPosition

Ƭ **CurrencyPosition**: *object*

Defined in domain.ts:53

Defined in src/domain.ts:53

#### Type declaration:

* **balance**: *number*

* **blocked**? : *undefined | number*

* **currency**: *[Currency](globals.md#currency)*

___

###  Depth

Ƭ **Depth**: *1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10*

Defined in OpenAPI.ts:33

___

###  Dict

Ƭ **Dict**: *object*

Defined in OpenAPI.ts:36

#### Type declaration:

* \[ **x**: *string*\]: T

___

###  Empty

Ƭ **Empty**: *object*

Defined in domain.ts:6

Defined in src/domain.ts:6

* This file was generated automatically by @tinkoff/invest-types-generator
* do not try amending it manually
* This file was generated automatically by @tinkoff/invest-types-generator
* do not try amending it manually

#### Type declaration:

* **payload**: *any*

* **status**: *string*

* **trackingId**: *string*

___

###  Error

Ƭ **Error**: *object*

Defined in domain.ts:12

Defined in src/domain.ts:12

#### Type declaration:

* **payload**: *[ErrorPayload](globals.md#errorpayload)*

* **status**: *string*

* **trackingId**: *string*

___

###  ErrorPayload

Ƭ **ErrorPayload**: *object*

Defined in domain.ts:313

Defined in src/domain.ts:313

#### Type declaration:

* **code**? : *undefined | string*

* **message**? : *undefined | string*

___

###  HttpMethod

Ƭ **HttpMethod**: *"get" | "post"*

Defined in OpenAPI.ts:34

___

###  InstrumentId

Ƭ **InstrumentId**: *object | object*

Defined in OpenAPI.ts:42

___

###  InstrumentType

Ƭ **InstrumentType**: *object*

Defined in domain.ts:309

Defined in src/domain.ts:309

#### Type declaration:

___

###  Interval

Ƭ **Interval**: *"1min" | "2min" | "3min" | "5min" | "10min" | "15min" | "30min" | "hour" | "2hour" | "4hour" | "day" | "week" | "month"*

Defined in OpenAPI.ts:19

___

###  LimitOrderParams

Ƭ **LimitOrderParams**: *object*

Defined in OpenAPI.ts:62

#### Type declaration:

* **figi**: *string*

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **price**: *number*

___

###  LimitOrderRequest

Ƭ **LimitOrderRequest**: *object*

Defined in domain.ts:176

Defined in src/domain.ts:176

#### Type declaration:

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **price**: *number*

___

###  LimitOrderResponse

Ƭ **LimitOrderResponse**: *object*

Defined in domain.ts:182

Defined in src/domain.ts:182

#### Type declaration:

* **payload**: *[PlacedLimitOrder](globals.md#placedlimitorder)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrument

Ƭ **MarketInstrument**: *object*

Defined in domain.ts:294

Defined in src/domain.ts:294

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

Defined in domain.ts:266

Defined in src/domain.ts:266

#### Type declaration:

* **instruments**: *[MarketInstrument](globals.md#marketinstrument)[]*

* **total**: *number*

___

###  MarketInstrumentListResponse

Ƭ **MarketInstrumentListResponse**: *object*

Defined in domain.ts:260

Defined in src/domain.ts:260

#### Type declaration:

* **payload**: *[MarketInstrumentList](globals.md#marketinstrumentlist)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrumentResponse

Ƭ **MarketInstrumentResponse**: *object*

Defined in domain.ts:277

Defined in src/domain.ts:277

#### Type declaration:

* **payload**: *[MarketInstrument](globals.md#marketinstrument)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketOrderRequest

Ƭ **MarketOrderRequest**: *object*

Defined in domain.ts:199

Defined in src/domain.ts:199

#### Type declaration:

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

___

###  MarketOrderResponse

Ƭ **MarketOrderResponse**: *object*

Defined in domain.ts:204

Defined in src/domain.ts:204

#### Type declaration:

* **payload**: *[PlacedMarketOrder](globals.md#placedmarketorder)*

* **status**: *string*

* **trackingId**: *string*

___

###  MoneyAmount

Ƭ **MoneyAmount**: *object*

Defined in domain.ts:73

Defined in src/domain.ts:73

#### Type declaration:

* **currency**: *[Currency](globals.md#currency)*

* **value**: *number*

___

###  Operation

Ƭ **Operation**: *object*

Defined in domain.ts:143

Defined in src/domain.ts:143

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

Ƭ **OperationStatus**: *object*

Defined in domain.ts:227

Defined in src/domain.ts:227

#### Type declaration:

___

###  OperationTrade

Ƭ **OperationTrade**: *object*

Defined in domain.ts:136

Defined in src/domain.ts:136

#### Type declaration:

* **date**: *string*

* **price**: *number*

* **quantity**: *number*

* **tradeId**: *string*

___

###  OperationType

Ƭ **OperationType**: *object*

Defined in domain.ts:223

Defined in src/domain.ts:223

#### Type declaration:

___

###  OperationTypeWithCommission

Ƭ **OperationTypeWithCommission**: *object*

Defined in domain.ts:225

Defined in src/domain.ts:225

#### Type declaration:

___

###  Operations

Ƭ **Operations**: *object*

Defined in domain.ts:132

Defined in src/domain.ts:132

#### Type declaration:

* **operations**: *[Operation](globals.md#operation)[]*

___

###  OperationsResponse

Ƭ **OperationsResponse**: *object*

Defined in domain.ts:126

Defined in src/domain.ts:126

#### Type declaration:

* **payload**: *[Operations](globals.md#operations)*

* **status**: *string*

* **trackingId**: *string*

___

###  Order

Ƭ **Order**: *object*

Defined in domain.ts:165

Defined in src/domain.ts:165

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

Defined in domain.ts:98

Defined in src/domain.ts:98

#### Type declaration:

* **price**: *number*

* **quantity**: *number*

___

###  OrderStatus

Ƭ **OrderStatus**: *object*

Defined in domain.ts:231

Defined in src/domain.ts:231

#### Type declaration:

___

###  OrderType

Ƭ **OrderType**: *object*

Defined in domain.ts:233

Defined in src/domain.ts:233

#### Type declaration:

___

###  Orderbook

Ƭ **Orderbook**: *object*

Defined in domain.ts:84

Defined in src/domain.ts:84

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

Defined in domain.ts:78

Defined in src/domain.ts:78

#### Type declaration:

* **payload**: *[Orderbook](globals.md#orderbook)*

* **status**: *string*

* **trackingId**: *string*

___

###  OrderbookStreaming

Ƭ **OrderbookStreaming**: *object*

Defined in OpenAPI.ts:37

#### Type declaration:

* **bids**: *Array‹[number, number]›*

* **depth**: *[Depth](globals.md#depth)*

* **figi**: *string*

___

###  OrdersResponse

Ƭ **OrdersResponse**: *object*

Defined in domain.ts:159

Defined in src/domain.ts:159

#### Type declaration:

* **payload**: *[Order](globals.md#order)[]*

* **status**: *string*

* **trackingId**: *string*

___

###  PlacedLimitOrder

Ƭ **PlacedLimitOrder**: *object*

Defined in domain.ts:188

Defined in src/domain.ts:188

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

Defined in domain.ts:210

Defined in src/domain.ts:210

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

Defined in domain.ts:24

Defined in src/domain.ts:24

#### Type declaration:

* **positions**: *[PortfolioPosition](globals.md#portfolioposition)[]*

___

###  PortfolioCurrenciesResponse

Ƭ **PortfolioCurrenciesResponse**: *object*

Defined in domain.ts:43

Defined in src/domain.ts:43

#### Type declaration:

* **payload**: *[Currencies](globals.md#currencies)*

* **status**: *string*

* **trackingId**: *string*

___

###  PortfolioPosition

Ƭ **PortfolioPosition**: *object*

Defined in domain.ts:59

Defined in src/domain.ts:59

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

Defined in domain.ts:18

Defined in src/domain.ts:18

#### Type declaration:

* **payload**: *[Portfolio](globals.md#portfolio)*

* **status**: *string*

* **trackingId**: *string*

___

###  SandboxAccount

Ƭ **SandboxAccount**: *object*

Defined in domain.ts:245

Defined in src/domain.ts:245

#### Type declaration:

* **brokerAccountId**: *string*

* **brokerAccountType**: *[BrokerAccountType](globals.md#brokeraccounttype)*

___

###  SandboxCurrency

Ƭ **SandboxCurrency**: *object*

Defined in domain.ts:305

Defined in src/domain.ts:305

#### Type declaration:

___

###  SandboxRegisterRequest

Ƭ **SandboxRegisterRequest**: *object*

Defined in domain.ts:235

Defined in src/domain.ts:235

#### Type declaration:

* **brokerAccountType**? : *[BrokerAccountType](globals.md#brokeraccounttype)*

___

###  SandboxRegisterResponse

Ƭ **SandboxRegisterResponse**: *object*

Defined in domain.ts:239

Defined in src/domain.ts:239

#### Type declaration:

* **payload**: *[SandboxAccount](globals.md#sandboxaccount)*

* **status**: *string*

* **trackingId**: *string*

___

###  SandboxSetCurrencyBalanceRequest

Ƭ **SandboxSetCurrencyBalanceRequest**: *object*

Defined in domain.ts:250

Defined in src/domain.ts:250

#### Type declaration:

* **balance**: *number*

* **currency**: *[SandboxCurrency](globals.md#sandboxcurrency)*

___

###  SandboxSetPositionBalanceRequest

Ƭ **SandboxSetPositionBalanceRequest**: *object*

Defined in domain.ts:255

Defined in src/domain.ts:255

#### Type declaration:

* **balance**: *number*

* **figi**? : *undefined | string*

___

###  SearchMarketInstrument

Ƭ **SearchMarketInstrument**: *object*

Defined in domain.ts:283

Defined in src/domain.ts:283

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

Defined in domain.ts:271

Defined in src/domain.ts:271

#### Type declaration:

* **payload**: *[SearchMarketInstrument](globals.md#searchmarketinstrument)*

* **status**: *string*

* **trackingId**: *string*

___

###  SocketEventType

Ƭ **SocketEventType**: *"orderbook" | "candle" | "instrument_info"*

Defined in OpenAPI.ts:35

___

###  TradeStatus

Ƭ **TradeStatus**: *object*

Defined in domain.ts:221

Defined in src/domain.ts:221

#### Type declaration:

___

###  UserAccount

Ƭ **UserAccount**: *object*

Defined in domain.ts:38

Defined in src/domain.ts:38

#### Type declaration:

* **brokerAccountId**: *string*

* **brokerAccountType**: *[BrokerAccountType](globals.md#brokeraccounttype)*

___

###  UserAccounts

Ƭ **UserAccounts**: *object*

Defined in domain.ts:34

Defined in src/domain.ts:34

#### Type declaration:

* **accounts**: *[UserAccount](globals.md#useraccount)[]*

___

###  UserAccountsResponse

Ƭ **UserAccountsResponse**: *object*

Defined in domain.ts:28

Defined in src/domain.ts:28

#### Type declaration:

* **payload**: *[UserAccounts](globals.md#useraccounts)*

* **status**: *string*

* **trackingId**: *string*

## Variables

### `Const` WebSocket

• **WebSocket**: *any* =  require('ws')

Defined in OpenAPI.ts:18

## Functions

###  getQueryString

▸ **getQueryString**(`params`: object): *string*

Defined in OpenAPI.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`params` | object |

**Returns:** *string*

___

###  once

▸ **once**<**P**, **R**>(`fn`: function): *function*

Defined in OpenAPI.ts:69

**Type parameters:**

▪ **P**: *Array‹any›*

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (...`args`: P): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | P |

**Returns:** *function*

▸ (...`args`: P): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | P |
