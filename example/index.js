const OpenAPI = require('tading-open-api');

let apiURL2 = 'https://api-invest.tinkoff.ru/openapi';
let apiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox/';
let socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
let secretToken2 =
  '';
let secretToken =
  'your token here';
const api = new OpenAPI({ apiURL, secretToken, socketURL });


async function run() {
  const { figi } = await api.searchOne({ ticker: 'AAPL' });
  // const portfolio = await api.portfolio();
  //const stocks = await api.stocks();
  //console.log(await api.sandboxRegister());
  await api.sandboxClear();
  console.log(await api.setCurrenciesBalance({ currency: 'USD', balance: 1000 }));
  // console.log(await api.setPositionBalance({ figi, balance: 1000 }));
  console.log(await api.portfolio());
  console.log(await api.limitOrder({ operation: 'Buy', figi, lots: 1, price: 100 }));
  console.log(await api.portfolio());

  // const etfs = await api.etfs();
  // const currencies = await api.currencies();
  // const bonds = await api.bonds();
  // const orders = await api.orders();
  api.orderbook({ figi, depth: 10 }, (x) => {
    console.log(x.bids);
    debugger;
  });
  // api.candle({ figi }, (x) => {
  //
  //  console.log(x.h);
  //   debugger;
  // });
  // const item = await api.search(portfolio[0]);
  // const operations = await api.operations({ from: '2019-02-15', interval: '30days' });
}
run();
