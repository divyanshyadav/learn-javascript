import addPartial from './addPartial';

test('adding 3 numbers', () => {
    const expectedResult = 3;
    const actualResult = addPartial(1)(1)(1);

    expect(actualResult).toBe(expectedResult);
});
