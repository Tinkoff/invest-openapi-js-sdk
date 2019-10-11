[tading-open-api](../globals.md) › [OpenAPI](openapi.md)

# Class: OpenAPI

## Hierarchy

* EventEmitter

  ↳ **OpenAPI**

## Index

### Constructors

* [constructor](openapi.md#markdown-header-constructor)

### Methods

* [bonds](openapi.md#markdown-header-bonds)
* [cancelOrder](openapi.md#markdown-header-cancelorder)
* [candle](openapi.md#markdown-header-candle)
* [currencies](openapi.md#markdown-header-currencies)
* [etfs](openapi.md#markdown-header-etfs)
* [instrumentInfo](openapi.md#markdown-header-instrumentinfo)
* [limitOrder](openapi.md#markdown-header-limitorder)
* [operations](openapi.md#markdown-header-operations)
* [orderbook](openapi.md#markdown-header-orderbook)
* [orders](openapi.md#markdown-header-orders)
* [portfolio](openapi.md#markdown-header-portfolio)
* [sandboxClear](openapi.md#markdown-header-sandboxclear)
* [search](openapi.md#markdown-header-search)
* [searchOne](openapi.md#markdown-header-searchone)
* [setCurrenciesBalance](openapi.md#markdown-header-setcurrenciesbalance)
* [setPositionBalance](openapi.md#markdown-header-setpositionbalance)
* [stocks](openapi.md#markdown-header-stocks)

## Constructors

###  constructor

\+ **new OpenAPI**(`__namedParameters`: object): *[OpenAPI](openapi.md)*

Defined in OpenAPI.ts:84

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`apiURL` | string | REST api url см [документацию](https://tinkoffcreditsystems.github.io/invest-openapi/env/) |
`secretToken` | string | токен доступа см [получение токена доступа](https://tinkoffcreditsystems.github.io/invest-openapi/auth/)   |
`socketURL` | string | Streaming api url см [документацию](https://tinkoffcreditsystems.github.io/invest-openapi/env/) |

**Returns:** *[OpenAPI](openapi.md)*

## Methods

###  bonds

▸ **bonds**(): *Promise‹[MarketInstrumentList](../globals.md#markdown-header-marketinstrumentlist)›*

Defined in OpenAPI.ts:284

Метод для получения всех доступных облигаций

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#markdown-header-marketinstrumentlist)›*

___

###  cancelOrder

▸ **cancelOrder**(`__namedParameters`: object): *Promise‹[LimitOrderResponse](../globals.md#markdown-header-limitorderresponse)›*

Defined in OpenAPI.ts:256

Метод для отмены активных заявок

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | идентифткатор заявки  |

**Returns:** *Promise‹[LimitOrderResponse](../globals.md#markdown-header-limitorderresponse)›*

___

###  candle

▸ **candle**(`__namedParameters`: object, `cb`: function): *unsubscribe*

Defined in OpenAPI.ts:371

Метод для подписки на данные по свечному графику инструмента

**`example`** см. метод orderbook

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`figi` | string | - | идентификатор инструмента |
`interval` | "1min" &#124; "2min" &#124; "3min" &#124; "5min" &#124; "10min" &#124; "15min" &#124; "30min" &#124; "hour" &#124; "2hour" &#124; "4hour" &#124; "day" &#124; "week" &#124; "month" | "1min" | интервал для свечи |

▪`Default value`  **cb**: *function*=  console.log

функция для обработки новых данных по свечи

▸ (`x`: [CandleStreaming](../globals.md#markdown-header-candlestreaming)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [CandleStreaming](../globals.md#markdown-header-candlestreaming) |

**Returns:** *unsubscribe*

функция для отмены подписки

___

###  currencies

▸ **currencies**(): *Promise‹[MarketInstrumentList](../globals.md#markdown-header-marketinstrumentlist)›*

Defined in OpenAPI.ts:270

Метод для получения всех доступных валютных инструментов

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#markdown-header-marketinstrumentlist)›*

___

###  etfs

▸ **etfs**(): *Promise‹[MarketInstrumentList](../globals.md#markdown-header-marketinstrumentlist)›*

Defined in OpenAPI.ts:277

Метод для получения всех доступных валютных ETF

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#markdown-header-marketinstrumentlist)›*

___

###  instrumentInfo

▸ **instrumentInfo**(`__namedParameters`: object, `cb`: log): *unsubscribe*

Defined in OpenAPI.ts:385

Метод для подписки на данные по инструменту

**`example`** см. метод orderbook

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`figi` | string | идентификатор инструмента |

▪`Default value`  **cb**: *log*=  console.log

функция для обработки новых данных по инструменту

**Returns:** *unsubscribe*

функция для отмены подписки

___

###  limitOrder

▸ **limitOrder**(`__namedParameters`: object): *Promise‹[LimitOrderResponse](../globals.md#markdown-header-limitorderresponse)›*

Defined in OpenAPI.ts:240

Метод для выставления заявки

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`figi` | string | идентификатор инструмента |
`lots` | number | количество лотов для заявки |
`operation` | "Buy" &#124; "Sell" | тип заявки |
`price` | number | цена лимитной заявки  |

**Returns:** *Promise‹[LimitOrderResponse](../globals.md#markdown-header-limitorderresponse)›*

___

###  operations

▸ **operations**(`__namedParameters`: object): *Promise‹[Operations](../globals.md#markdown-header-operations)›*

Defined in OpenAPI.ts:302

Метод для получения операций по цб по инструменту

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`figi` | string | Идентификатор инструмента  |
`from` | string | Дата, с которой необходимо получить операции в формате ??? |
`interval` | "1day" &#124; "7days" &#124; "14days" &#124; "30days" | Интервал, за который необходимы операции |

**Returns:** *Promise‹[Operations](../globals.md#markdown-header-operations)›*

___

###  orderbook

▸ **orderbook**(`__namedParameters`: object, `cb`: function): *unsubscribe*

Defined in OpenAPI.ts:356

Метод для подписки на данные по стакану инструмента

**`example`** 
```typescript
const { figi } = await api.searchOne({ ticker: 'AAPL' });
const unsubFromAAPL = api.orderbook({ figi }, (ob) => { console.log(ob.bids) });
// ... подписка больше не нужна
unsubFromAAPL();
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`depth` | 1 &#124; 2 &#124; 3 &#124; 4 &#124; 5 &#124; 6 &#124; 7 &#124; 8 &#124; 9 &#124; 10 | 3 | - |
`figi` | string | - | идентификатор инструмента |

▪`Default value`  **cb**: *function*=  console.log

функция для обработки новых данных по стакану

▸ (`x`: [OrderbookStreaming](../globals.md#markdown-header-orderbookstreaming)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [OrderbookStreaming](../globals.md#markdown-header-orderbookstreaming) |

**Returns:** *unsubscribe*

функция для отмены подписки

___

###  orders

▸ **orders**(): *Promise‹[Order](../globals.md#markdown-header-order)[]›*

Defined in OpenAPI.ts:263

Метод для получения всех активных заявок

**Returns:** *Promise‹[Order](../globals.md#markdown-header-order)[]›*

___

###  portfolio

▸ **portfolio**(): *Promise‹[Portfolio](../globals.md#markdown-header-portfolio)›*

Defined in OpenAPI.ts:229

Метод для получение портфеля цб

**Returns:** *Promise‹[Portfolio](../globals.md#markdown-header-portfolio)›*

___

###  sandboxClear

▸ **sandboxClear**(): *Promise‹any›*

Defined in OpenAPI.ts:203

Метод для очистки песочницы

**Returns:** *Promise‹any›*

___

###  search

▸ **search**(`params`: [InstrumentId](../globals.md#markdown-header-instrumentid)): *Promise‹[MarketInstrumentList](../globals.md#markdown-header-marketinstrumentlist)›*

Defined in OpenAPI.ts:320

Метод для поиска инструментов по figi или ticker

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [InstrumentId](../globals.md#markdown-header-instrumentid) |   |

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#markdown-header-marketinstrumentlist)›*

___

###  searchOne

▸ **searchOne**(`params`: [InstrumentId](../globals.md#markdown-header-instrumentid)): *Promise‹[MarketInstrument](../globals.md#markdown-header-marketinstrument) | null›*

Defined in OpenAPI.ts:338

Метод для поиска инструмента по figi или ticker

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [InstrumentId](../globals.md#markdown-header-instrumentid) |   |

**Returns:** *Promise‹[MarketInstrument](../globals.md#markdown-header-marketinstrument) | null›*

___

###  setCurrenciesBalance

▸ **setCurrenciesBalance**(`params`: [SandboxSetCurrencyBalanceRequest](../globals.md#markdown-header-sandboxsetcurrencybalancerequest)): *Promise‹void›*

Defined in OpenAPI.ts:221

Метод для задания баланса по валютам

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [SandboxSetCurrencyBalanceRequest](../globals.md#markdown-header-sandboxsetcurrencybalancerequest) | см. описание типа  |

**Returns:** *Promise‹void›*

___

###  setPositionBalance

▸ **setPositionBalance**(`params`: [SandboxSetPositionBalanceRequest](../globals.md#markdown-header-sandboxsetpositionbalancerequest)): *Promise‹void›*

Defined in OpenAPI.ts:212

Метод для задания баланса по бумагам

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [SandboxSetPositionBalanceRequest](../globals.md#markdown-header-sandboxsetpositionbalancerequest) | см. описание типа  |

**Returns:** *Promise‹void›*

___

###  stocks

▸ **stocks**(): *Promise‹[MarketInstrumentList](../globals.md#markdown-header-marketinstrumentlist)›*

Defined in OpenAPI.ts:291

Метод для получения всех доступных акций

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#markdown-header-marketinstrumentlist)›*
