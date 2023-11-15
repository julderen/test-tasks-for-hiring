export interface Item<T> {
    name: T;
    timeout: number;
}

export const awaitQueue = <T>(items: Item<T>[], callback: (value: T) => void, index = 0) => {
    const item = items[index];

    if (item) {
        setTimeout(() => {
            callback(item.name);
            awaitQueue(items, callback, index + 1);
        }, item.timeout);
    }
};

export const run = <T>(items: Item<T>[]) => awaitQueue(items, console.log);
