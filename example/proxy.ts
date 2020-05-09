/**
 * Утилита для проксирования соединений в одно
 */
import WebSocket, { Server } from 'ws';

const token = 'MY_TOKEN';
const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
const wss = new Server({ port: 8080 });
const enum ReadyState {
    'CONNECTING',
    'OPEN',
    'CLOSING',
    'CLOSED',
}
const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
let targetWs = new WebSocket(socketURL, { perMessageDeflate: false, headers });

wss.on('connection', (ws) => {
    if (targetWs && ![ReadyState.OPEN, ReadyState.CONNECTING].includes(targetWs.readyState)) {
        targetWs.terminate();
        targetWs = new WebSocket(socketURL, { perMessageDeflate: false, headers });
    }

    targetWs.on('message', (msg) => {
        console.log('in: ', msg.slice(0, 20), '...');
        ws.send(msg);
    });
    targetWs.on('close', () => ws.close());
    targetWs.on('error', (error) => {
        console.log(error);
        ws.close();
    });

    ws.on('message', (msg: string) => {
        console.log('out: ', msg.slice(0, 20), '...');
        if (targetWs.readyState === ReadyState.OPEN) {
            targetWs.send(msg);
        }
    });

    /*
        Чтобы бот при отключении не оставлял подписку просто так висеть
        Отпишем его перед выходом

        process.on('SIGINT', () => {
            unsubscribe();
            process.exit();
        });
     */
});
