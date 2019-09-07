import sort from './sort';

test('sort should not mutate original array', () => {
    const array = [5, 4, 3, 2, 1];
    const sortedArray = sort(array);

    expect(sortedArray).not.toBe(array);
});

test('sort should to sort correctly', () => {
    const array = [5, 4, 3, 2, 1];
    const sortedArray = sort(array);
    const expectedResult = [1, 2, 3, 4, 5];

    expect(sortedArray).toEqual(expectedResult);
});
