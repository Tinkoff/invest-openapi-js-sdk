const OpenAPI = require('tading-open-api');

let apiURL = 'https://api-invest.tinkoff.ru/openapi';
let sandboxApiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox/';
let socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
let secretToken = process.env.TOKEN; // токен для боевого api
let sandboxToken = process.env.SANDBOX_TOKEN; // токен для сандбокса
const api = new OpenAPI({ apiURL: sandboxApiURL, secretToken: sandboxToken, socketURL });


async function run() {
  await api.sandboxClear();
  const { figi } = await api.searchOne({ ticker: 'AAPL' });
  console.log(await api.setCurrenciesBalance({ currency: 'USD', balance: 1000 })); // 1000$ на счет
  console.log(await api.instrumentPortfolio({ figi })); // В портфеле ничего нет
  console.log(await api.limitOrder({ operation: 'Buy', figi, lots: 1, price: 100 })); // Покупаем AAPL
  console.log(await api.instrumentPortfolio({ figi })); // Сделка прошла моментально

  api.orderbook({ figi, depth: 10 }, (x) => {
    console.log(x.bids);
  });
  api.candle({ figi }, (x) => {
   console.log(x.h);
  });
}
run();
