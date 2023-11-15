import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';

import { awaitQueue } from './awaitQueue';

describe('awaitQueue', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('awaitQueue wait 2 ms', () => {
        const callback = vi.fn();
        expect(callback).not.toHaveBeenCalled();

        awaitQueue([{ name: 1, timeout: 2 }], callback);
        expect(callback).not.toHaveBeenCalled();
        vi.advanceTimersByTime(2);
        expect(callback).toHaveBeenCalledWith(1);
    });

    it('awaitQueue wait 5 ms and 10 ms', () => {
        const callback = vi.fn();
        expect(callback).not.toHaveBeenCalled();

        awaitQueue(
            [
                { name: 'first', timeout: 5 },
                { name: 'second', timeout: 10 },
            ],
            callback,
        );
        expect(callback).not.toHaveBeenCalled();
        vi.advanceTimersByTime(4);
        expect(callback).not.toHaveBeenCalled();
        vi.advanceTimersByTime(1);
        expect(callback).lastCalledWith('first');
        vi.advanceTimersByTime(9);
        expect(callback).toBeCalledTimes(1);
        vi.advanceTimersByTime(1);
        expect(callback).lastCalledWith('second');
    });

    it('awaitQueue wait 3s, 5s and 2s', () => {
        const callback = vi.fn();
        expect(callback).not.toHaveBeenCalled();

        awaitQueue(
            [
                { name: 'first', timeout: 3000 },
                { name: 'second', timeout: 5000 },
                { name: 'third', timeout: 2000 },
            ],
            callback,
        );
        expect(callback).not.toHaveBeenCalled();
        vi.advanceTimersByTime(3000);
        expect(callback).lastCalledWith('first');
        vi.advanceTimersByTime(5000);
        expect(callback).lastCalledWith('second');
        vi.advanceTimersByTime(2000);
        expect(callback).lastCalledWith('third');
    });
});
