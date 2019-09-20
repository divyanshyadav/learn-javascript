import range from './index';

test('range should return a generator', () => {
    const generator = range(0, 5, 1);
    expect(generator.constructor.name).toBe('GeneratorFunctionPrototype');
});

test('iterating over yielding values from generator', () => {
    const generator = range(0, 2, 1);
    const expectedOutput = [0, 1, 2];

    const output = [];
    let item = generator.next();

    while (!item.done) {
        output.push(item.value);
        item = generator.next();
    }

    expect(output).toEqual(expectedOutput);
});
