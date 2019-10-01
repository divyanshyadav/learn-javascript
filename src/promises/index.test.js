/* eslint-disable immutable/no-let */
import * as promise from '.';
import { wait } from '../utils';

describe('all', () => {
    it('should give result of all promises after successful resolution in same order', async () => {
        const promises = [
            wait(10),
            wait(20),
            wait(1),
        ];
        const expectedOutput = [10, 20, 1];
        const output = await promise.all(promises);

        expect(output).toEqual(expectedOutput);
    });

    it('should throw error if one promise fails', async () => {
        const error = new Error('a');
        const promises = [
            wait(10),
            wait(20),
            wait(1),
            wait(50).then(() => {
                throw error;
            }),
        ];
        const expectedOutput = error;

        let output;
        try {
            output = await promise.all(promises);
        } catch (err) {
            output = err;
        }


        expect(output).toEqual(expectedOutput);
    });
});

describe('race', () => {
    it('should fulfills/reject if one promise passes or fails', async () => {
        const promises = [
            wait(10),
            wait(20),
            wait(1),
            wait(50).then(() => {
                throw new Error('a');
            }),
        ];

        const expectedOutput = 1;
        const output = await promise.race(promises);

        expect(output).toEqual(expectedOutput);
    });
});

describe('allSettled', () => {
    it('should give result of all promises', async () => {
        const error = new Error('a');
        const promises = [
            wait(10),
            wait(20),
            wait(1),
            wait(2).then(() => {
                throw error;
            }),
        ];

        const expectedOutput = [10, 20, 1, error];
        const output = await promise.allSettled(promises);

        expect(output).toEqual(expectedOutput);
    });
});

test('resolve', async () => {
    expect(await promise.resolve()).toBe(undefined);
});

test('reject', async () => {
    try {
        await promise.reject();
    } catch (error) {
        expect(error).toEqual(undefined);
    }
});
