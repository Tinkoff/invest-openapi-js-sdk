/**
 * Утилита для проксирования соединений в одно
 * Решает проблему ограничения в 6 соединений на 1 аккаунт
 * Путем подключения нескольких клиентов и проксирование их в общий сокет до invest api
 * Позволяет подключать неограниченное количество клиентов
 * Разрывает соединение при простое и восстанавливает при первом подключении
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
let pingTimeout: NodeJS.Timeout;
let targetWs: WebSocket;

/**
 * Поддержание соединения
 */
function startProxy() {
    if (targetWs) {
        targetWs.terminate();
    }

    targetWs = new WebSocket(socketURL, { perMessageDeflate: false, headers });

    clearTimeout(pingTimeout);
}

wss.on('connection', (ws) => {
    if (!targetWs || (targetWs && ![ReadyState.OPEN, ReadyState.CONNECTING].includes(targetWs.readyState))) {
        startProxy();
    }

    const handleMessage = (msg: string | Buffer) => {
        console.log('in: ', msg.slice(0, 40), '...');
        if (ws.readyState === ReadyState.OPEN) {
            ws.send(msg);
        }
    };

    const handleClose = (e: Event | number) => {
        console.log('Remote server close connection\n', e);
        if (ws.readyState === ReadyState.OPEN) {
            ws.close();
        }

        // Отписываемся чтобы не было утечек памяти
        targetWs.off('message', handleMessage);
        targetWs.off('close', handleClose);
        targetWs.off('error', handleClose);

        ws.terminate();
    };

    targetWs.on('message', handleMessage);
    targetWs.on('close', handleClose);
    targetWs.on('error', handleClose);

    ws.on('message', (msg: string) => {
        console.log('out: ', msg.slice(0, 40), '...');
        if (targetWs.readyState === ReadyState.OPEN) {
            targetWs.send(msg);
        }
    });

    ws.on('ping', () => {
        if (targetWs.readyState === ReadyState.OPEN) {
            console.log('local in ping');
        }
    });
});

/*
    Чтобы бот при отключении не оставлял подписку просто так висеть
    Отпишем его перед выходом

    process.on('SIGINT', () => {
        unsubscribe();
        process.exit();
    });
 */
