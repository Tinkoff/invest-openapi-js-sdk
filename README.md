# Trading Open API - JS SDK

SDK для работы с OpenAPI Тинькофф Инвестиции, который можно использовать для создания торговых роботов.

`npm i @tinkoff/invest-openapi-js-sdk --save`


## Документация

Доступна по [ссылке](./doc/classes/openapi.md)

[Swagger](https://tinkoffcreditsystems.github.io/invest-openapi/swagger-ui/)


## Авторизация

Более полную информацию можно просмотреть в [документации](https://tinkoffcreditsystems.github.io/invest-openapi/auth/)

1. Перейдите в [настройки](https://www.tinkoff.ru/invest/settings/) блок "Токен для OpenAPI"
2. Функция "Подтверждение сделок кодом" должна быть отключена
3. Выпустите токен OpenApi для биржи и Sandbox. Возможно система
   попросит вас авторизоваться еще раз, не беспокойтесь, это необходимо
   для подключения робота к торговой платформе.
4. Скопируйте токен и сохраните, токен отображается только один раз, просмотреть
   его позже не получится, тем не менее вы можете выпускать неограниченное количество токенов.

## Пример

см. более сложный пример в [example](./example)

```typescript
import OpenAPI from '@tinkoff/invest-openapi-js-sdk';

const apiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox'; // Для Production-окружения будет https://api-invest.tinkoff.ru/openapi
const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
const secretToken = 'xxx'; // токен для сандбокса
const api = new OpenAPI({ apiURL, secretToken, socketURL });

!(async function run() {
  const { figi } = await api.searchOne({ ticker: 'AAPL' });
  const { commission, orderId } = await api.limitOrder({
    operation: 'Buy',
    figi,
    lots: 1,
    price: 100,
  }); // Покупаем AAPL
  console.log(commission); // Комиссия за сделку
  await api.cancelOrder({ orderId }); // Отменяем заявку
})();
```

## Sandbox

Для использования _Sandbox_ необходимо передать в apiURL и в secretToken url
эндпоинта с апи sandbox'а и токен для песочницы.
Более подробно в [документации](https://tinkoffcreditsystems.github.io/invest-openapi/env/)

```typescript
await api.sandboxClear(); // очищаем песочницу 
const { figi } = await api.searchOne({ ticker: 'AAPL' });
await api.setCurrenciesBalance({ currency: 'USD', balance: 1000 }); // 1000$ на счет
await api.instrumentPortfolio({ figi }); // В портфеле ничего нет
await api.limitOrder({ operation: 'Buy', figi, lots: 1, price: 100 }); // Покупаем AAPL
await api.instrumentPortfolio({ figi }); // Сделка прошла моментально
```
## Ограничения

На данный момент доступно только 6 TCP соединений на аккаунт
