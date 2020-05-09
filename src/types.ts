import { OperationType } from "./domain";

export type Interval =
    '1min' |
    '2min' |
    '3min' |
    '5min' |
    '10min' |
    '15min' |
    '30min' |
    'hour' |
    '2hour' |
    '4hour' |
    'day' |
    'week' |
    'month';

export type Depth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type HttpMethod = 'get' | 'post';
export type SocketEventType = 'orderbook' | 'candle' | 'instrument_info';
export type Dict<T> = { [x: string]: T };
export type OrderbookStreaming = {
    figi: string;
    depth: Depth;
    bids: Array<[number, number]>;
};
export type InstrumentId = { ticker: string } | { figi: string };
export type CandleStreaming = {
    o: number;
    c: number;
    h: number;
    l: number;
    v: number;
    time: string;
    interval: Interval;
    figi: string;
};

export type LimitOrderParams = {
    figi: string;
    lots: number;
    operation: OperationType;
    price: number;
};

export type FIGI = {
    figi: string;
}