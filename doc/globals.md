[invest-openapi-js-sdk](README.md) › [Globals](globals.md)

# invest-openapi-js-sdk

## Index

### Classes

* [OpenAPI](classes/openapi.md)

### Type aliases

* [CandleStreaming](globals.md#candlestreaming)
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
* [OperationInterval](globals.md#operationinterval)
* [OperationStatus](globals.md#operationstatus)
* [OperationTrade](globals.md#operationtrade)
* [OperationType](globals.md#operationtype)
* [OperationTypeWithCommission](globals.md#operationtypewithcommission)
* [Operations](globals.md#operations)
* [OperationsInterval](globals.md#operationsinterval)
* [OperationsResponse](globals.md#operationsresponse)
* [Order](globals.md#order)
* [OrderStatus](globals.md#orderstatus)
* [OrderType](globals.md#ordertype)
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

### Variables

* [WebSocket](globals.md#const-websocket)

### Functions

* [getQueryString](globals.md#getquerystring)
* [once](globals.md#once)

## Type aliases

###  CandleStreaming

Ƭ **CandleStreaming**: *object*

Defined in OpenAPI.ts:39

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

###  Currencies

Ƭ **Currencies**: *object*

Defined in domain.d.ts:29

#### Type declaration:

* **currencies**: *[CurrencyPosition](globals.md#currencyposition)[]*

___

###  Currency

Ƭ **Currency**: *object*

Defined in domain.d.ts:175

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

Defined in OpenAPI.ts:29

___

###  Dict

Ƭ **Dict**: *object*

Defined in OpenAPI.ts:32

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

Defined in domain.d.ts:181

#### Type declaration:

* **code**? : *undefined | string*

* **message**? : *undefined | string*

___

###  HttpMethod

Ƭ **HttpMethod**: *"get" | "post"*

Defined in OpenAPI.ts:30

___

###  InstrumentId

Ƭ **InstrumentId**: *object | object*

Defined in OpenAPI.ts:38

___

###  InstrumentType

Ƭ **InstrumentType**: *object*

Defined in domain.d.ts:179

#### Type declaration:

___

###  Interval

Ƭ **Interval**: *"1min" | "2min" | "3min" | "5min" | "10min" | "15min" | "30min" | "hour" | "2hour" | "4hour" | "day" | "week" | "month"*

Defined in OpenAPI.ts:15

___

###  LimitOrderParams

Ƭ **LimitOrderParams**: *object*

Defined in OpenAPI.ts:58

#### Type declaration:

* **figi**: *string*

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **price**: *number*

___

###  LimitOrderRequest

Ƭ **LimitOrderRequest**: *object*

Defined in domain.d.ts:105

#### Type declaration:

* **lots**: *number*

* **operation**: *[OperationType](globals.md#operationtype)*

* **price**: *number*

___

###  LimitOrderResponse

Ƭ **LimitOrderResponse**: *object*

Defined in domain.d.ts:111

#### Type declaration:

* **payload**: *[PlacedLimitOrder](globals.md#placedlimitorder)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrument

Ƭ **MarketInstrument**: *object*

Defined in domain.d.ts:164

#### Type declaration:

* **currency**? : *[Currency](globals.md#currency)*

* **figi**: *string*

* **isin**? : *undefined | string*

* **lot**: *number*

* **minPriceIncrement**? : *undefined | number*

* **ticker**: *string*

___

###  MarketInstrumentList

Ƭ **MarketInstrumentList**: *object*

Defined in domain.d.ts:153

#### Type declaration:

* **instruments**: *[MarketInstrument](globals.md#marketinstrument)[]*

* **total**: *number*

___

###  MarketInstrumentListResponse

Ƭ **MarketInstrumentListResponse**: *object*

Defined in domain.d.ts:147

#### Type declaration:

* **payload**: *[MarketInstrumentList](globals.md#marketinstrumentlist)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrumentResponse

Ƭ **MarketInstrumentResponse**: *object*

Defined in domain.d.ts:158

#### Type declaration:

* **payload**: *[MarketInstrument](globals.md#marketinstrument)*

* **status**: *string*

* **trackingId**: *string*

___

###  MoneyAmount

Ƭ **MoneyAmount**: *object*

Defined in domain.d.ts:50

#### Type declaration:

* **currency**: *[Currency](globals.md#currency)*

* **value**: *number*

___

###  Operation

Ƭ **Operation**: *object*

Defined in domain.d.ts:72

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

###  OperationInterval

Ƭ **OperationInterval**: *object*

Defined in domain.d.ts:177

#### Type declaration:

___

###  OperationStatus

Ƭ **OperationStatus**: *object*

Defined in domain.d.ts:131

#### Type declaration:

___

###  OperationTrade

Ƭ **OperationTrade**: *object*

Defined in domain.d.ts:65

#### Type declaration:

* **date**: *string*

* **price**: *number*

* **quantity**: *number*

* **tradeId**: *string*

___

###  OperationType

Ƭ **OperationType**: *"Buy" | "Sell"*

Defined in domain.d.ts:127

___

###  OperationTypeWithCommission

Ƭ **OperationTypeWithCommission**: *object*

Defined in domain.d.ts:129

#### Type declaration:

___

###  Operations

Ƭ **Operations**: *object*

Defined in domain.d.ts:61

#### Type declaration:

* **operations**: *[Operation](globals.md#operation)[]*

___

###  OperationsInterval

Ƭ **OperationsInterval**: *"1day" | "7days" | "14days" | "30days"*

Defined in OpenAPI.ts:14

___

###  OperationsResponse

Ƭ **OperationsResponse**: *object*

Defined in domain.d.ts:55

#### Type declaration:

* **payload**: *[Operations](globals.md#operations)*

* **status**: *string*

* **trackingId**: *string*

___

###  Order

Ƭ **Order**: *object*

Defined in domain.d.ts:94

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

###  OrderStatus

Ƭ **OrderStatus**: *object*

Defined in domain.d.ts:133

#### Type declaration:

___

###  OrderType

Ƭ **OrderType**: *object*

Defined in domain.d.ts:135

#### Type declaration:

___

###  OrderbookStreaming

Ƭ **OrderbookStreaming**: *object*

Defined in OpenAPI.ts:33

#### Type declaration:

* **bids**: *Array‹[number, number]›*

* **depth**: *[Depth](globals.md#depth)*

* **figi**: *string*

___

###  OrdersResponse

Ƭ **OrdersResponse**: *object*

Defined in domain.d.ts:88

#### Type declaration:

* **payload**: *[Order](globals.md#order)[]*

* **status**: *string*

* **trackingId**: *string*

___

###  PlacedLimitOrder

Ƭ **PlacedLimitOrder**: *object*

Defined in domain.d.ts:117

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

Defined in domain.d.ts:173

#### Type declaration:

___

###  SandboxSetCurrencyBalanceRequest

Ƭ **SandboxSetCurrencyBalanceRequest**: *object*

Defined in domain.d.ts:137

#### Type declaration:

* **balance**: *number*

* **currency**: *[SandboxCurrency](globals.md#sandboxcurrency)*

___

###  SandboxSetPositionBalanceRequest

Ƭ **SandboxSetPositionBalanceRequest**: *object*

Defined in domain.d.ts:142

#### Type declaration:

* **balance**: *number*

* **figi**? : *undefined | string*

___

###  SocketEventType

Ƭ **SocketEventType**: *"orderbook" | "candle" | "instrument_info"*

Defined in OpenAPI.ts:31

## Variables

### `Const` WebSocket

• **WebSocket**: *any* =  require('ws')

Defined in OpenAPI.ts:13

## Functions

###  getQueryString

▸ **getQueryString**(`params`: object): *string*

Defined in OpenAPI.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`params` | object |

**Returns:** *string*

___

###  once

▸ **once**<**P**, **R**>(`fn`: function): *function*

Defined in OpenAPI.ts:65

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
