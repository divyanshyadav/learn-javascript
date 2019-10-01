import deepFreeze from 'deep-freeze';
import map from './map';

test('squaring each item', () => {
    const input = [1, 2, 3];
    deepFreeze(input);

    const expectedOutput = [1, 4, 9];

    const square = (x) => x * x;
    const output = map(input, square);

    expect(output).not.toBe(input);
    expect(output).toEqual(expectedOutput);
});
