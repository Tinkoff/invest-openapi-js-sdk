[@tinkoff/invest-openapi-js-sdk - v1.2.6](../README.md) › [Globals](../globals.md) › [OpenAPI](openapi.md)

# Class: OpenAPI

## Hierarchy

* **OpenAPI**

## Index

### Constructors

* [constructor](openapi.md#constructor)

### Methods

* [bonds](openapi.md#bonds)
* [cancelOrder](openapi.md#cancelorder)
* [candle](openapi.md#candle)
* [candlesGet](openapi.md#candlesget)
* [currencies](openapi.md#currencies)
* [etfs](openapi.md#etfs)
* [instrumentInfo](openapi.md#instrumentinfo)
* [instrumentPortfolio](openapi.md#instrumentportfolio)
* [limitOrder](openapi.md#limitorder)
* [operations](openapi.md#operations)
* [orderbook](openapi.md#orderbook)
* [orderbookGet](openapi.md#orderbookget)
* [orders](openapi.md#orders)
* [portfolio](openapi.md#portfolio)
* [portfolioCurrencies](openapi.md#portfoliocurrencies)
* [sandboxClear](openapi.md#sandboxclear)
* [search](openapi.md#search)
* [searchOne](openapi.md#searchone)
* [setCurrenciesBalance](openapi.md#setcurrenciesbalance)
* [setPositionBalance](openapi.md#setpositionbalance)
* [stocks](openapi.md#stocks)

## Constructors

###  constructor

\+ **new OpenAPI**(`__namedParameters`: object): *[OpenAPI](openapi.md)*

*Defined in [src/OpenAPI.ts:55](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L55)*

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

▸ **bonds**(): *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

*Defined in [src/OpenAPI.ts:229](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L229)*

Метод для получения всех доступных облигаций

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

___

###  cancelOrder

▸ **cancelOrder**(`__namedParameters`: object): *Promise‹void›*

*Defined in [src/OpenAPI.ts:201](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L201)*

Метод для отмены активных заявок

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | идентифткатор заявки  |

**Returns:** *Promise‹void›*

___

###  candle

▸ **candle**(`__namedParameters`: object, `cb`: function): *(Anonymous function)*

*Defined in [src/OpenAPI.ts:340](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L340)*

Метод для подписки на данные по свечному графику инструмента

**`example`** см. метод [orderbook](openapi.md#orderbook)

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`figi` | string | - | идентификатор инструмента |
`interval` | "1min" &#124; "2min" &#124; "3min" &#124; "5min" &#124; "10min" &#124; "15min" &#124; "30min" &#124; "hour" &#124; "day" &#124; "week" &#124; "month" &#124; "2hour" &#124; "4hour" | "1min" | интервал для свечи |

▪`Default value`  **cb**: *function*=  console.log

функция для обработки новых данных по свечи

▸ (`x`: [CandleStreaming](../globals.md#candlestreaming)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [CandleStreaming](../globals.md#candlestreaming) |

**Returns:** *(Anonymous function)*

функция для отмены подписки

___

###  candlesGet

▸ **candlesGet**(`__namedParameters`: object): *Promise‹[Candles](../globals.md#candles)›*

*Defined in [src/OpenAPI.ts:259](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L259)*

Метод для получения исторических свечей по FIGI

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`figi` | string | - | Figi-идентификатор инструмента |
`from` | string | - | Начало временного промежутка в формате ISO 8601 |
`interval` | "1min" &#124; "2min" &#124; "3min" &#124; "5min" &#124; "10min" &#124; "15min" &#124; "30min" &#124; "hour" &#124; "day" &#124; "week" &#124; "month" | "1min" | интервал для свечи  |
`to` | string | - | Конец временного промежутка в формате ISO 8601 |

**Returns:** *Promise‹[Candles](../globals.md#candles)›*

___

###  currencies

▸ **currencies**(): *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

*Defined in [src/OpenAPI.ts:215](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L215)*

Метод для получения всех доступных валютных инструментов

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

___

###  etfs

▸ **etfs**(): *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

*Defined in [src/OpenAPI.ts:222](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L222)*

Метод для получения всех доступных валютных ETF

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

___

###  instrumentInfo

▸ **instrumentInfo**(`__namedParameters`: object, `cb`: log): *(Anonymous function)*

*Defined in [src/OpenAPI.ts:354](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L354)*

Метод для подписки на данные по инструменту

**`example`** см. метод [orderbook](openapi.md#orderbook)

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`figi` | string | идентификатор инструмента |

▪`Default value`  **cb**: *log*=  console.log

функция для обработки новых данных по инструменту

**Returns:** *(Anonymous function)*

функция для отмены подписки

___

###  instrumentPortfolio

▸ **instrumentPortfolio**(`params`: [InstrumentId](../globals.md#instrumentid)): *Promise‹[PortfolioPosition](../globals.md#portfolioposition) | null›*

*Defined in [src/OpenAPI.ts:163](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L163)*

Метод для получение данных по инструменту в портфеле

**Parameters:**

Name | Type |
------ | ------ |
`params` | [InstrumentId](../globals.md#instrumentid) |

**Returns:** *Promise‹[PortfolioPosition](../globals.md#portfolioposition) | null›*

___

###  limitOrder

▸ **limitOrder**(`__namedParameters`: object): *Promise‹[PlacedLimitOrder](../globals.md#placedlimitorder)›*

*Defined in [src/OpenAPI.ts:185](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L185)*

Метод для выставления заявки

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`figi` | string | идентификатор инструмента |
`lots` | number | количество лотов для заявки |
`operation` | "Buy" &#124; "Sell" | тип заявки |
`price` | number | цена лимитной заявки  |

**Returns:** *Promise‹[PlacedLimitOrder](../globals.md#placedlimitorder)›*

___

###  operations

▸ **operations**(`__namedParameters`: object): *Promise‹[Operations](../globals.md#operations)›*

*Defined in [src/OpenAPI.ts:246](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L246)*

Метод для получения операций по цб по инструменту

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`figi` | string | Figi-идентификатор инструмента  |
`from` | string | Начало временного промежутка в формате ISO 8601 |
`to` | string | Конец временного промежутка в формате ISO 8601 |

**Returns:** *Promise‹[Operations](../globals.md#operations)›*

___

###  orderbook

▸ **orderbook**(`__namedParameters`: object, `cb`: function): *(Anonymous function)*

*Defined in [src/OpenAPI.ts:325](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L325)*

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

▸ (`x`: [OrderbookStreaming](../globals.md#orderbookstreaming)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [OrderbookStreaming](../globals.md#orderbookstreaming) |

**Returns:** *(Anonymous function)*

функция для отмены подписки

___

###  orderbookGet

▸ **orderbookGet**(`__namedParameters`: object): *Promise‹[Orderbook](../globals.md#orderbook)›*

*Defined in [src/OpenAPI.ts:280](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L280)*

Метод для получение стакана

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`depth` | 1 &#124; 2 &#124; 3 &#124; 4 &#124; 5 &#124; 6 &#124; 7 &#124; 8 &#124; 9 &#124; 10 | 3 |   |
`figi` | string | - | Figi-идентификатор инструмента |

**Returns:** *Promise‹[Orderbook](../globals.md#orderbook)›*

___

###  orders

▸ **orders**(): *Promise‹[Order](../globals.md#order)[]›*

*Defined in [src/OpenAPI.ts:208](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L208)*

Метод для получения всех активных заявок

**Returns:** *Promise‹[Order](../globals.md#order)[]›*

___

###  portfolio

▸ **portfolio**(): *Promise‹[Portfolio](../globals.md#portfolio)›*

*Defined in [src/OpenAPI.ts:149](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L149)*

Метод для получение портфеля цб

**Returns:** *Promise‹[Portfolio](../globals.md#portfolio)›*

___

###  portfolioCurrencies

▸ **portfolioCurrencies**(): *Promise‹[Currencies](../globals.md#currencies)›*

*Defined in [src/OpenAPI.ts:156](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L156)*

Метод для получения валютных активов клиента

**Returns:** *Promise‹[Currencies](../globals.md#currencies)›*

___

###  sandboxClear

▸ **sandboxClear**(): *Promise‹any›*

*Defined in [src/OpenAPI.ts:123](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L123)*

Метод для очистки песочницы

**Returns:** *Promise‹any›*

___

###  search

▸ **search**(`params`: [InstrumentId](../globals.md#instrumentid)): *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

*Defined in [src/OpenAPI.ts:289](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L289)*

Метод для поиска инструментов по figi или ticker

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [InstrumentId](../globals.md#instrumentid) |   |

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

___

###  searchOne

▸ **searchOne**(`params`: [InstrumentId](../globals.md#instrumentid)): *Promise‹[MarketInstrument](../globals.md#marketinstrument) | null›*

*Defined in [src/OpenAPI.ts:307](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L307)*

Метод для поиска инструмента по figi или ticker

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [InstrumentId](../globals.md#instrumentid) |   |

**Returns:** *Promise‹[MarketInstrument](../globals.md#marketinstrument) | null›*

___

###  setCurrenciesBalance

▸ **setCurrenciesBalance**(`params`: [SandboxSetCurrencyBalanceRequest](../globals.md#sandboxsetcurrencybalancerequest)): *Promise‹void›*

*Defined in [src/OpenAPI.ts:141](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L141)*

Метод для задания баланса по валютам

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [SandboxSetCurrencyBalanceRequest](../globals.md#sandboxsetcurrencybalancerequest) | см. описание типа  |

**Returns:** *Promise‹void›*

___

###  setPositionBalance

▸ **setPositionBalance**(`params`: [SandboxSetPositionBalanceRequest](../globals.md#sandboxsetpositionbalancerequest)): *Promise‹void›*

*Defined in [src/OpenAPI.ts:132](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L132)*

Метод для задания баланса по бумагам

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [SandboxSetPositionBalanceRequest](../globals.md#sandboxsetpositionbalancerequest) | см. описание типа  |

**Returns:** *Promise‹void›*

___

###  stocks

▸ **stocks**(): *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

*Defined in [src/OpenAPI.ts:236](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/6f43984/src/OpenAPI.ts#L236)*

Метод для получения всех доступных акций

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*
