import OpenAPI from '@tinkoff/invest-openapi-js-sdk';
const apiURL = 'https://api-invest.tinkoff.ru/openapi';
const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
const secretToken = process.env.TOKEN; // токен для боевого api
const api = new OpenAPI({ apiURL: apiURL, secretToken: secretToken as string, socketURL });

!(async function run() {
  api.instrumentInfo({ figi: 'NOOOOOO' }, (x) => {
    console.log(x);
  });
  api.onStreamingError((x) => {
    console.log('error =',x);
  })
})();
