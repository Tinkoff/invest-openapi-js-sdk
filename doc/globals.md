[tading-open-api](globals.md)

# tading-open-api

## Index

### Classes

* [OpenAPI](classes/openapi.md)

### Type aliases

* [CandleStreaming](globals.md#markdown-header-candlestreaming)
* [Currencies](globals.md#markdown-header-currencies)
* [Currency](globals.md#markdown-header-currency)
* [CurrencyPosition](globals.md#markdown-header-currencyposition)
* [Depth](globals.md#markdown-header-depth)
* [Dict](globals.md#markdown-header-dict)
* [Empty](globals.md#markdown-header-empty)
* [Error](globals.md#markdown-header-error)
* [ErrorPayload](globals.md#markdown-header-errorpayload)
* [HttpMethod](globals.md#markdown-header-httpmethod)
* [InstrumentId](globals.md#markdown-header-instrumentid)
* [InstrumentType](globals.md#markdown-header-instrumenttype)
* [Interval](globals.md#markdown-header-interval)
* [LimitOrderParams](globals.md#markdown-header-limitorderparams)
* [LimitOrderRequest](globals.md#markdown-header-limitorderrequest)
* [LimitOrderResponse](globals.md#markdown-header-limitorderresponse)
* [MarketInstrument](globals.md#markdown-header-marketinstrument)
* [MarketInstrumentList](globals.md#markdown-header-marketinstrumentlist)
* [MarketInstrumentListResponse](globals.md#markdown-header-marketinstrumentlistresponse)
* [MarketInstrumentResponse](globals.md#markdown-header-marketinstrumentresponse)
* [MoneyAmount](globals.md#markdown-header-moneyamount)
* [Operation](globals.md#markdown-header-operation)
* [OperationInterval](globals.md#markdown-header-operationinterval)
* [OperationStatus](globals.md#markdown-header-operationstatus)
* [OperationTrade](globals.md#markdown-header-operationtrade)
* [OperationType](globals.md#markdown-header-operationtype)
* [OperationTypeWithCommission](globals.md#markdown-header-operationtypewithcommission)
* [Operations](globals.md#markdown-header-operations)
* [OperationsInterval](globals.md#markdown-header-operationsinterval)
* [OperationsResponse](globals.md#markdown-header-operationsresponse)
* [Order](globals.md#markdown-header-order)
* [OrderStatus](globals.md#markdown-header-orderstatus)
* [OrderType](globals.md#markdown-header-ordertype)
* [OrderbookStreaming](globals.md#markdown-header-orderbookstreaming)
* [OrdersResponse](globals.md#markdown-header-ordersresponse)
* [PlacedLimitOrder](globals.md#markdown-header-placedlimitorder)
* [Portfolio](globals.md#markdown-header-portfolio)
* [PortfolioCurrenciesResponse](globals.md#markdown-header-portfoliocurrenciesresponse)
* [PortfolioPosition](globals.md#markdown-header-portfolioposition)
* [PortfolioResponse](globals.md#markdown-header-portfolioresponse)
* [SandboxCurrency](globals.md#markdown-header-sandboxcurrency)
* [SandboxSetCurrencyBalanceRequest](globals.md#markdown-header-sandboxsetcurrencybalancerequest)
* [SandboxSetPositionBalanceRequest](globals.md#markdown-header-sandboxsetpositionbalancerequest)
* [SocketEventType](globals.md#markdown-header-socketeventtype)

### Variables

* [WebSocket](globals.md#markdown-header-const-websocket)

### Functions

* [getQueryString](globals.md#markdown-header-getquerystring)
* [once](globals.md#markdown-header-once)

## Type aliases

###  CandleStreaming

Ƭ **CandleStreaming**: *object*

Defined in OpenAPI.ts:40

#### Type declaration:

* **c**: *number*

* **figi**: *string*

* **h**: *number*

* **interval**: *[Interval](globals.md#markdown-header-interval)*

* **l**: *number*

* **o**: *number*

* **time**: *string*

* **v**: *number*

___

###  Currencies

Ƭ **Currencies**: *object*

Defined in domain.d.ts:29

#### Type declaration:

* **currencies**: *[CurrencyPosition](globals.md#markdown-header-currencyposition)[]*

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

* **currency**: *[Currency](globals.md#markdown-header-currency)*

___

###  Depth

Ƭ **Depth**: *1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10*

Defined in OpenAPI.ts:30

___

###  Dict

Ƭ **Dict**: *object*

Defined in OpenAPI.ts:33

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

* **payload**: *[ErrorPayload](globals.md#markdown-header-errorpayload)*

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

Defined in OpenAPI.ts:31

___

###  InstrumentId

Ƭ **InstrumentId**: *object | object*

Defined in OpenAPI.ts:39

___

###  InstrumentType

Ƭ **InstrumentType**: *object*

Defined in domain.d.ts:179

#### Type declaration:

___

###  Interval

Ƭ **Interval**: *"1min" | "2min" | "3min" | "5min" | "10min" | "15min" | "30min" | "hour" | "2hour" | "4hour" | "day" | "week" | "month"*

Defined in OpenAPI.ts:16

___

###  LimitOrderParams

Ƭ **LimitOrderParams**: *object*

Defined in OpenAPI.ts:59

#### Type declaration:

* **figi**: *string*

* **lots**: *number*

* **operation**: *[OperationType](globals.md#markdown-header-operationtype)*

* **price**: *number*

___

###  LimitOrderRequest

Ƭ **LimitOrderRequest**: *object*

Defined in domain.d.ts:105

#### Type declaration:

* **lots**: *number*

* **operation**: *[OperationType](globals.md#markdown-header-operationtype)*

* **price**: *number*

___

###  LimitOrderResponse

Ƭ **LimitOrderResponse**: *object*

Defined in domain.d.ts:111

#### Type declaration:

* **payload**: *[PlacedLimitOrder](globals.md#markdown-header-placedlimitorder)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrument

Ƭ **MarketInstrument**: *object*

Defined in domain.d.ts:164

#### Type declaration:

* **currency**? : *[Currency](globals.md#markdown-header-currency)*

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

* **instruments**: *[MarketInstrument](globals.md#markdown-header-marketinstrument)[]*

* **total**: *number*

___

###  MarketInstrumentListResponse

Ƭ **MarketInstrumentListResponse**: *object*

Defined in domain.d.ts:147

#### Type declaration:

* **payload**: *[MarketInstrumentList](globals.md#markdown-header-marketinstrumentlist)*

* **status**: *string*

* **trackingId**: *string*

___

###  MarketInstrumentResponse

Ƭ **MarketInstrumentResponse**: *object*

Defined in domain.d.ts:158

#### Type declaration:

* **payload**: *[MarketInstrument](globals.md#markdown-header-marketinstrument)*

* **status**: *string*

* **trackingId**: *string*

___

###  MoneyAmount

Ƭ **MoneyAmount**: *object*

Defined in domain.d.ts:50

#### Type declaration:

* **currency**: *[Currency](globals.md#markdown-header-currency)*

* **value**: *number*

___

###  Operation

Ƭ **Operation**: *object*

Defined in domain.d.ts:72

#### Type declaration:

* **commission**? : *[MoneyAmount](globals.md#markdown-header-moneyamount)*

* **currency**: *[Currency](globals.md#markdown-header-currency)*

* **date**: *string*

* **figi**? : *undefined | string*

* **id**: *string*

* **instrumentType**? : *[InstrumentType](globals.md#markdown-header-instrumenttype)*

* **isMarginCall**: *boolean*

* **operationType**? : *[OperationTypeWithCommission](globals.md#markdown-header-operationtypewithcommission)*

* **payment**: *number*

* **price**? : *undefined | number*

* **quantity**? : *undefined | number*

* **status**: *[OperationStatus](globals.md#markdown-header-operationstatus)*

* **trades**? : *[OperationTrade](globals.md#markdown-header-operationtrade)[]*

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

* **operations**: *[Operation](globals.md#markdown-header-operation)[]*

___

###  OperationsInterval

Ƭ **OperationsInterval**: *"1day" | "7days" | "14days" | "30days"*

Defined in OpenAPI.ts:15

___

###  OperationsResponse

Ƭ **OperationsResponse**: *object*

Defined in domain.d.ts:55

#### Type declaration:

* **payload**: *[Operations](globals.md#markdown-header-operations)*

* **status**: *string*

* **trackingId**: *string*

___

###  Order

Ƭ **Order**: *object*

Defined in domain.d.ts:94

#### Type declaration:

* **executedLots**: *number*

* **figi**: *string*

* **operation**: *[OperationType](globals.md#markdown-header-operationtype)*

* **orderId**: *string*

* **price**: *number*

* **requestedLots**: *number*

* **status**: *[OrderStatus](globals.md#markdown-header-orderstatus)*

* **type**: *[OrderType](globals.md#markdown-header-ordertype)*

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

Defined in OpenAPI.ts:34

#### Type declaration:

* **bids**: *Array‹[number, number]›*

* **depth**: *[Depth](globals.md#markdown-header-depth)*

* **figi**: *string*

___

###  OrdersResponse

Ƭ **OrdersResponse**: *object*

Defined in domain.d.ts:88

#### Type declaration:

* **payload**: *[Order](globals.md#markdown-header-order)[]*

* **status**: *string*

* **trackingId**: *string*

___

###  PlacedLimitOrder

Ƭ **PlacedLimitOrder**: *object*

Defined in domain.d.ts:117

#### Type declaration:

* **commission**? : *[MoneyAmount](globals.md#markdown-header-moneyamount)*

* **executedLots**: *number*

* **operation**: *[OperationType](globals.md#markdown-header-operationtype)*

* **orderId**: *string*

* **rejectReason**? : *undefined | string*

* **requestedLots**: *number*

* **status**: *[OrderStatus](globals.md#markdown-header-orderstatus)*

___

###  Portfolio

Ƭ **Portfolio**: *object*

Defined in domain.d.ts:19

#### Type declaration:

* **positions**: *[PortfolioPosition](globals.md#markdown-header-portfolioposition)[]*

___

###  PortfolioCurrenciesResponse

Ƭ **PortfolioCurrenciesResponse**: *object*

Defined in domain.d.ts:23

#### Type declaration:

* **payload**: *[Currencies](globals.md#markdown-header-currencies)*

* **status**: *string*

* **trackingId**: *string*

___

###  PortfolioPosition

Ƭ **PortfolioPosition**: *object*

Defined in domain.d.ts:39

#### Type declaration:

* **balance**: *number*

* **blocked**? : *undefined | number*

* **expectedYield**? : *[MoneyAmount](globals.md#markdown-header-moneyamount)*

* **figi**: *string*

* **instrumentType**: *[InstrumentType](globals.md#markdown-header-instrumenttype)*

* **isin**? : *undefined | string*

* **lots**: *number*

* **ticker**? : *undefined | string*

___

###  PortfolioResponse

Ƭ **PortfolioResponse**: *object*

Defined in domain.d.ts:13

#### Type declaration:

* **payload**: *[Portfolio](globals.md#markdown-header-portfolio)*

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

* **currency**: *[SandboxCurrency](globals.md#markdown-header-sandboxcurrency)*

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

Defined in OpenAPI.ts:32

## Variables

### `Const` WebSocket

• **WebSocket**: *any* =  require('ws')

Defined in OpenAPI.ts:14

## Functions

###  getQueryString

▸ **getQueryString**(`params`: object): *string*

Defined in OpenAPI.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`params` | object |

**Returns:** *string*

___

###  once

▸ **once**<**P**, **R**>(`fn`: function): *function*

Defined in OpenAPI.ts:66

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
