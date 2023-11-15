import { describe, expect, it } from 'vitest';

import { reduceRight } from './reduceRight';

describe('reduceRight', () => {
    it.each<[string | undefined, string[], string | undefined]>([
        ['', [], ''],
        ['cba', ['a', 'b', 'c'], ''],
        [undefined, [], undefined],
        ['cba', ['a', 'b', 'c'], undefined],
    ])(
        'reduceRight work with strings return %j with %j and initial value %j',
        (result, items, initialValue) => {
            expect(reduceRight(items, (acc, item) => acc + item, initialValue)).equal(
                result,
            );
        },
    );

    it.each<[number | undefined, number[], number | undefined]>([
        [0, [], 0],
        [6, [3, 2, 1], 0],
        [undefined, [], undefined],
        [6, [3, 2, 1], undefined],
    ])(
        'reduceRight work with numbers return %j with %j and initial value %j',
        (result, items, initialValue) => {
            expect(reduceRight(items, (acc, item) => acc + item, initialValue)).equal(
                result,
            );
        },
    );
});
