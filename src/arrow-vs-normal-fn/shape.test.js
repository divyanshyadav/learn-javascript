import Shape from './Shape';

test('context of arrow function', () => {
    const obj = new Shape();
    const context = obj.arrow.call(null);

    expect(context).toEqual(obj);
});


test('context of normal function', () => {
    const obj = new Shape();
    const context = obj.normal.call(null);

    expect(context).not.toBe(obj);
});
