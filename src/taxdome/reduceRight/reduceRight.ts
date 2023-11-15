export const reduceRight = <T, Result>(
    items: T[],
    reduce: (acc: Result, item: T) => Result,
    initAcc?: Result,
) => {
    let startItem = items.length - 1;
    let result = initAcc;

    if (!result) {
        if (startItem >= 0) {
            result = items[startItem] as unknown as Result;

            startItem -= 1;
        } else {
            return result;
        }
    }

    for (let i = startItem; i >= 0; i--) {
        result = reduce(result, items[i]);
    }

    return result;
};
