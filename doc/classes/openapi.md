[@tinkoff/invest-openapi-js-sdk](../README.md) › [Globals](../globals.md) › [OpenAPI](openapi.md)

# Class: OpenAPI

## Hierarchy

* **OpenAPI**

## Index

### Constructors

* [constructor](openapi.md#constructor)

### Methods

* [accounts](openapi.md#accounts)
* [bonds](openapi.md#bonds)
* [cancelOrder](openapi.md#cancelorder)
* [candle](openapi.md#candle)
* [candlesGet](openapi.md#candlesget)
* [currencies](openapi.md#currencies)
* [etfs](openapi.md#etfs)
* [getCurrentAccountId](openapi.md#getcurrentaccountid)
* [instrumentInfo](openapi.md#instrumentinfo)
* [instrumentPortfolio](openapi.md#instrumentportfolio)
* [limitOrder](openapi.md#limitorder)
* [marketOrder](openapi.md#marketorder)
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
* [setCurrentAccountId](openapi.md#setcurrentaccountid)
* [setPositionBalance](openapi.md#setpositionbalance)
* [stocks](openapi.md#stocks)

## Constructors

###  constructor

\+ **new OpenAPI**(`__namedParameters`: object): *[OpenAPI](openapi.md)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`apiURL` | string | REST api url см [документацию](https://tinkoffcreditsystems.github.io/invest-openapi/env/) |
`brokerAccountId` | undefined &#124; string | номер счета (по умолчанию - Тинькофф)  |
`secretToken` | string | токен доступа см [получение токена доступа](https://tinkoffcreditsystems.github.io/invest-openapi/auth/) |
`socketURL` | string | Streaming api url см [документацию](https://tinkoffcreditsystems.github.io/invest-openapi/env/) |

**Returns:** *[OpenAPI](openapi.md)*

## Methods

###  accounts

▸ **accounts**(): *Promise‹[UserAccounts](../globals.md#useraccounts)›*

Метод для получения брокерских счетов клиента

**Returns:** *Promise‹[UserAccounts](../globals.md#useraccounts)›*

___

###  bonds

▸ **bonds**(): *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

Метод для получения всех доступных облигаций

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

___

###  cancelOrder

▸ **cancelOrder**(`__namedParameters`: object): *Promise‹void›*

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

Метод для подписки на данные по свечному графику инструмента

**`example`** см. метод [orderbook](openapi.md#orderbook)

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`figi` | string | - | идентификатор инструмента |
`interval` | "1min" &#124; "2min" &#124; "3min" &#124; "5min" &#124; "10min" &#124; "15min" &#124; "30min" &#124; "hour" &#124; "day" &#124; "week" &#124; "month" &#124; "2hour" &#124; "4hour" | "1min" | интервал для свечи |

▪`Default value`  **cb**: *function*= console.log

функция для обработки новых данных по свечи

▸ (`x`: [CandleStreaming](../globals.md#candlestreaming), `metaParams`: [CandleStreamingMetaParams](../globals.md#candlestreamingotherparams)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [CandleStreaming](../globals.md#candlestreaming) |
`metaParams` | [CandleStreamingMetaParams](../globals.md#candlestreamingotherparams) |

**Returns:** *(Anonymous function)*

функция для отмены подписки

___

###  candlesGet

▸ **candlesGet**(`__namedParameters`: object): *Promise‹[Candles](../globals.md#candles)›*

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

Метод для получения всех доступных валютных инструментов

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

___

###  etfs

▸ **etfs**(): *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

Метод для получения всех доступных валютных ETF

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

___

###  getCurrentAccountId

▸ **getCurrentAccountId**(): *string | undefined*

Метод возвращает текущий номер счета (*undefined* - значение по умолчанию для счета Тинькофф).

**Returns:** *string | undefined*

___

###  instrumentInfo

▸ **instrumentInfo**(`__namedParameters`: object, `cb`: function): *(Anonymous function)*

Метод для подписки на данные по инструменту

**`example`** см. метод [orderbook](openapi.md#orderbook)

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`figi` | string | идентификатор инструмента |

▪`Default value`  **cb**: *function*= console.log

функция для обработки новых данных по инструменту

▸ (`x`: [InstrumentInfoStreaming](../globals.md#instrumentinfostreaming), `metaParams`: [InstrumentInfoStreamingMetaParams](../globals.md#instrumentinfostreamingotherparams)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [InstrumentInfoStreaming](../globals.md#instrumentinfostreaming) |
`metaParams` | [InstrumentInfoStreamingMetaParams](../globals.md#instrumentinfostreamingotherparams) |

**Returns:** *(Anonymous function)*

функция для отмены подписки

___

###  instrumentPortfolio

▸ **instrumentPortfolio**(`params`: [InstrumentId](../globals.md#instrumentid)): *Promise‹[PortfolioPosition](../globals.md#portfolioposition) | null›*

Метод для получение данных по инструменту в портфеле

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [InstrumentId](../globals.md#instrumentid) | см. описание типа  |

**Returns:** *Promise‹[PortfolioPosition](../globals.md#portfolioposition) | null›*

___

###  limitOrder

▸ **limitOrder**(`__namedParameters`: object): *Promise‹[PlacedLimitOrder](../globals.md#placedlimitorder)›*

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

###  marketOrder

▸ **marketOrder**(`__namedParameters`: object): *Promise‹[PlacedMarketOrder](../globals.md#placedmarketorder)›*

Метод для выставления заявки

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`figi` | string | идентификатор инструмента |
`lots` | number | количество лотов для заявки |
`operation` | "Buy" &#124; "Sell" | тип заявки |

**Returns:** *Promise‹[PlacedMarketOrder](../globals.md#placedmarketorder)›*

___

###  operations

▸ **operations**(`__namedParameters`: object): *Promise‹[Operations](../globals.md#operations)›*

Метод для получения операций по цб по инструменту

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`figi` | undefined &#124; string | Figi-идентификатор инструмента  |
`from` | string | Начало временного промежутка в формате ISO 8601 |
`to` | string | Конец временного промежутка в формате ISO 8601 |

**Returns:** *Promise‹[Operations](../globals.md#operations)›*

___

###  orderbook

▸ **orderbook**(`__namedParameters`: object, `cb`: function): *(Anonymous function)*

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

▪`Default value`  **cb**: *function*= console.log

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

Метод для получения всех активных заявок

**Returns:** *Promise‹[Order](../globals.md#order)[]›*

___

###  portfolio

▸ **portfolio**(): *Promise‹[Portfolio](../globals.md#portfolio)›*

Метод для получение портфеля цб

**Returns:** *Promise‹[Portfolio](../globals.md#portfolio)›*

___

###  portfolioCurrencies

▸ **portfolioCurrencies**(): *Promise‹[Currencies](../globals.md#currencies)›*

Метод для получения валютных активов клиента

**Returns:** *Promise‹[Currencies](../globals.md#currencies)›*

___

###  sandboxClear

▸ **sandboxClear**(): *Promise‹any›*

Метод для очистки песочницы

**Returns:** *Promise‹any›*

___

###  search

▸ **search**(`params`: [InstrumentId](../globals.md#instrumentid)): *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

Метод для поиска инструментов по figi или ticker

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [InstrumentId](../globals.md#instrumentid) |   |

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

___

###  searchOne

▸ **searchOne**(`params`: [InstrumentId](../globals.md#instrumentid)): *Promise‹[MarketInstrument](../globals.md#marketinstrument) | null›*

Метод для поиска инструмента по figi или ticker

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [InstrumentId](../globals.md#instrumentid) |   |

**Returns:** *Promise‹[MarketInstrument](../globals.md#marketinstrument) | null›*

___

###  setCurrenciesBalance

▸ **setCurrenciesBalance**(`params`: [SandboxSetCurrencyBalanceRequest](../globals.md#sandboxsetcurrencybalancerequest)): *Promise‹void›*

Метод для задания баланса по валютам

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [SandboxSetCurrencyBalanceRequest](../globals.md#sandboxsetcurrencybalancerequest) | см. описание типа  |

**Returns:** *Promise‹void›*

___

###  setCurrentAccountId

▸ **setCurrentAccountId**(`brokerAccountId`: string | undefined): *void*

Метод для сохранения номера счета по умолчанию.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`brokerAccountId` | string &#124; undefined | Номер счета. Для счета Тинькофф можно также передать значение *undefined*.  |

**Returns:** *void*

___

###  setPositionBalance

▸ **setPositionBalance**(`params`: [SandboxSetPositionBalanceRequest](../globals.md#sandboxsetpositionbalancerequest)): *Promise‹void›*

Метод для задания баланса по бумагам

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [SandboxSetPositionBalanceRequest](../globals.md#sandboxsetpositionbalancerequest) | см. описание типа  |

**Returns:** *Promise‹void›*

___

###  stocks

▸ **stocks**(): *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*

Метод для получения всех доступных акций

**Returns:** *Promise‹[MarketInstrumentList](../globals.md#marketinstrumentlist)›*
