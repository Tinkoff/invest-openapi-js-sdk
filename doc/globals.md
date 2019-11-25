[@tinkoff/invest-openapi-js-sdk](README.md) › [Globals](globals.md)

# @tinkoff/invest-openapi-js-sdk

## Index

### Classes

* [OpenAPI](classes/openapi.md)

### Type aliases

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
* [Portfolio](globals.md#portfolio)
* [PortfolioCurrenciesResponse](globals.md#portfoliocurrenciesresponse)
* [PortfolioPosition](globals.md#portfolioposition)
* [PortfolioResponse](globals.md#portfolioresponse)
* [SandboxCurrency](globals.md#sandboxcurrency)
* [SandboxSetCurrencyBalanceRequest](globals.md#sandboxsetcurrencybalancerequest)
* [SandboxSetPositionBalanceRequest](globals.md#sandboxsetpositionbalancerequest)
* [SocketEventType](globals.md#socketeventtype)
* [TradeStatus](globals.md#tradestatus)

### Variables

* [WebSocket](globals.md#const-websocket)

### Functions

* [getQueryString](globals.md#getquerystring)
* [once](globals.md#once)

## Type aliases

###  Candle

Ƭ **Candle**: *object*

Defined in domain.d.ts:93

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

Defined in domain.d.ts:104

#### Type declaration:

___

###  CandleStreaming

Ƭ **CandleStreaming**: *object*

Defined in OpenAPI.ts:42

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

Defined in domain.d.ts:87

#### Type declaration:

* **candles**: *[Candle](globals.md#candle)[]*

* **figi**: *string*

* **interval**: *[CandleResolution](globals.md#candleresolution)*

___

###  CandlesResponse

Ƭ **CandlesResponse**: *object*

Defined in domain.d.ts:81

#### Type declaration:

* **payload**: *[Candles](globals.md#candles)*

* **status**: *string*

* **trackingId**: *string*

___

###  Currencies

Ƭ **Currencies**: *object*

Defined in domain.d.ts:29

#### Type declaration:

* **currencies**: *[CurrencyPosition](globals.md#currencyposition)[]*

___

###  Currency

Ƭ **Currency**: *object*

Defined in domain.d.ts:229

#### Type declaration:

___

###  CurrencyPosition

Ƭ **CurrencyPosition**: *object*

Defined in domain.d.ts:33

#### Type declaration:

* **balance**: *number*

* **blocked**? : *undefined | number*

* **currency**: *[Currency](globals.md#currency)*

___

###  Depth

Ƭ **Depth**: *1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10*

Defined in OpenAPI.ts:32

___

###  Dict

Ƭ **Dict**: *object*

Defined in OpenAPI.ts:35

#### Type declaration:

* \[ **x**: *string*\]: T

___

###  Empty

Ƭ **Empty**: *object*

Defined in domain.d.ts:1

#### Type declaration:

* **payload**: *any*

* **status**: *string*

* **trackingId**: *string*

___

###  Error

Ƭ **Error**: *object*

Defined in domain.d.ts:7

#### Type declaration:

* **payload**: *[ErrorPayload](globals.md#errorpayload)*

* **status**: *string*

* **trackingId**: *string*

___

###  ErrorPayload

Ƭ **ErrorPayload**: *object*

Defined in domain.d.ts:233

#### Type declaration:

* **code**? : *undefined | string*

* **message**? : *undefined | string*

___

###  HttpMethod

Ƭ **HttpMethod**: *"get" | "post"*

Defined in OpenAPI.ts:33

___

###  InstrumentId

Ƭ **InstrumentId**: *object | object*

Defined in OpenAPI.ts:41

___

###  InstrumentType

Ƭ **InstrumentType**: *object*

Defined in domain.d.ts:231

#### Type declaration:

___

###  Interval

Ƭ **Interval**: *"1min" | "2min" | "3min" | "5min" | "10min" | "15min" | "30min" | "hour" | "2hour" | "4hour" | "day" | "week" | "month"*

Defined in OpenAPI.ts:18

___

###  LimitOrderParams

Ƭ **LimitOrderParams**: *object*

Defined in OpenAPI.ts:61

#### Type declaration:

* **figi**: *string*

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **price**: *number*

___

###  LimitOrderRequest

Ƭ **LimitOrderRequest**: *object*

Defined in domain.d.ts:156

#### Type declaration:

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **price**: *number*

___

###  LimitOrderResponse

Ƭ **LimitOrderResponse**: *object*

Defined in domain.d.ts:162

#### Type declaration:

* **payload**: *[PlacedLimitOrder](globals.md#placedlimitorder)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrument

Ƭ **MarketInstrument**: *object*

Defined in domain.d.ts:217

#### Type declaration:

* **currency**? : *[Currency](globals.md#currency)*

* **figi**: *string*

* **isin**? : *undefined | string*

* **lot**: *number*

* **minPriceIncrement**? : *undefined | number*

* **name**: *string*

* **ticker**: *string*

___

###  MarketInstrumentList

Ƭ **MarketInstrumentList**: *object*

Defined in domain.d.ts:206

#### Type declaration:

* **instruments**: *[MarketInstrument](globals.md#marketinstrument)[]*

* **total**: *number*

___

###  MarketInstrumentListResponse

Ƭ **MarketInstrumentListResponse**: *object*

Defined in domain.d.ts:200

#### Type declaration:

* **payload**: *[MarketInstrumentList](globals.md#marketinstrumentlist)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrumentResponse

Ƭ **MarketInstrumentResponse**: *object*

Defined in domain.d.ts:211

#### Type declaration:

* **payload**: *[MarketInstrument](globals.md#marketinstrument)*

* **status**: *string*

* **trackingId**: *string*

___

###  MoneyAmount

Ƭ **MoneyAmount**: *object*

Defined in domain.d.ts:52

#### Type declaration:

* **currency**: *[Currency](globals.md#currency)*

* **value**: *number*

___

###  Operation

Ƭ **Operation**: *object*

Defined in domain.d.ts:123

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

Defined in domain.d.ts:184

#### Type declaration:

___

###  OperationTrade

Ƭ **OperationTrade**: *object*

Defined in domain.d.ts:116

#### Type declaration:

* **date**: *string*

* **price**: *number*

* **quantity**: *number*

* **tradeId**: *string*

___

###  OperationType

Ƭ **OperationType**: *object*

Defined in domain.d.ts:180

#### Type declaration:

___

###  OperationTypeWithCommission

Ƭ **OperationTypeWithCommission**: *object*

Defined in domain.d.ts:182

#### Type declaration:

___

###  Operations

Ƭ **Operations**: *object*

Defined in domain.d.ts:112

#### Type declaration:

* **operations**: *[Operation](globals.md#operation)[]*

___

###  OperationsResponse

Ƭ **OperationsResponse**: *object*

Defined in domain.d.ts:106

#### Type declaration:

* **payload**: *[Operations](globals.md#operations)*

* **status**: *string*

* **trackingId**: *string*

___

###  Order

Ƭ **Order**: *object*

Defined in domain.d.ts:145

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

Defined in domain.d.ts:76

#### Type declaration:

* **price**: *number*

* **quantity**: *number*

___

###  OrderStatus

Ƭ **OrderStatus**: *object*

Defined in domain.d.ts:186

#### Type declaration:

___

###  OrderType

Ƭ **OrderType**: *object*

Defined in domain.d.ts:188

#### Type declaration:

___

###  Orderbook

Ƭ **Orderbook**: *object*

Defined in domain.d.ts:63

#### Type declaration:

* **asks**: *[OrderResponse](globals.md#orderresponse)[]*

* **bids**: *[OrderResponse](globals.md#orderresponse)[]*

* **closePrice**? : *undefined | number*

* **depth**: *number*

* **figi**: *string*

* **lastPrice**? : *undefined | number*

* **limitDown**? : *undefined | number*

* **limitUp**? : *undefined | number*

* **minPriceIncrement**: *number*

* **tradeStatus**: *[TradeStatus](globals.md#tradestatus)*

___

###  OrderbookResponse

Ƭ **OrderbookResponse**: *object*

Defined in domain.d.ts:57

#### Type declaration:

* **payload**: *[Orderbook](globals.md#orderbook)*

* **status**: *string*

* **trackingId**: *string*

___

###  OrderbookStreaming

Ƭ **OrderbookStreaming**: *object*

Defined in OpenAPI.ts:36

#### Type declaration:

* **bids**: *Array‹[number, number]›*

* **depth**: *[Depth](globals.md#depth)*

* **figi**: *string*

___

###  OrdersResponse

Ƭ **OrdersResponse**: *object*

Defined in domain.d.ts:139

#### Type declaration:

* **payload**: *[Order](globals.md#order)[]*

* **status**: *string*

* **trackingId**: *string*

___

###  PlacedLimitOrder

Ƭ **PlacedLimitOrder**: *object*

Defined in domain.d.ts:168

#### Type declaration:

* **commission**? : *[MoneyAmount](globals.md#moneyamount)*

* **executedLots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **orderId**: *string*

* **rejectReason**? : *undefined | string*

* **requestedLots**: *number*

* **status**: *[OrderStatus](globals.md#orderstatus)*

___

###  Portfolio

Ƭ **Portfolio**: *object*

Defined in domain.d.ts:19

#### Type declaration:

* **positions**: *[PortfolioPosition](globals.md#portfolioposition)[]*

___

###  PortfolioCurrenciesResponse

Ƭ **PortfolioCurrenciesResponse**: *object*

Defined in domain.d.ts:23

#### Type declaration:

* **payload**: *[Currencies](globals.md#currencies)*

* **status**: *string*

* **trackingId**: *string*

___

###  PortfolioPosition

Ƭ **PortfolioPosition**: *object*

Defined in domain.d.ts:39

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

* **ticker**? : *undefined | string*

___

###  PortfolioResponse

Ƭ **PortfolioResponse**: *object*

Defined in domain.d.ts:13

#### Type declaration:

* **payload**: *[Portfolio](globals.md#portfolio)*

* **status**: *string*

* **trackingId**: *string*

___

###  SandboxCurrency

Ƭ **SandboxCurrency**: *object*

Defined in domain.d.ts:227

#### Type declaration:

___

###  SandboxSetCurrencyBalanceRequest

Ƭ **SandboxSetCurrencyBalanceRequest**: *object*

Defined in domain.d.ts:190

#### Type declaration:

* **balance**: *number*

* **currency**: *[SandboxCurrency](globals.md#sandboxcurrency)*

___

###  SandboxSetPositionBalanceRequest

Ƭ **SandboxSetPositionBalanceRequest**: *object*

Defined in domain.d.ts:195

#### Type declaration:

* **balance**: *number*

* **figi**? : *undefined | string*

___

###  SocketEventType

Ƭ **SocketEventType**: *"orderbook" | "candle" | "instrument_info"*

Defined in OpenAPI.ts:34

___

###  TradeStatus

Ƭ **TradeStatus**: *object*

Defined in domain.d.ts:178

#### Type declaration:

## Variables

### `Const` WebSocket

• **WebSocket**: *any* =  require('ws')

Defined in OpenAPI.ts:17

## Functions

###  getQueryString

▸ **getQueryString**(`params`: object): *string*

Defined in OpenAPI.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`params` | object |

**Returns:** *string*

___

###  once

▸ **once**<**P**, **R**>(`fn`: function): *function*

Defined in OpenAPI.ts:68

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
