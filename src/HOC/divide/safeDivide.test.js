import divide from './safeDivide';

test('divide with no arguments', () => {
    expect(() => divide())
        .toThrowError(/0/i);
});

test('divide with no second argument', () => {
    expect(() => divide(1))
        .toThrowError(/1/i);
});

test('divide by zero', () => {
    expect(() => divide(1, 0))
        .toThrowError(/zero/i);
});

test('passing string as first argument', () => {
    expect(() => divide('1', 0))
        .toThrowError(/number/i);
});

test('passing string as second argument', () => {
    expect(() => divide(1, '2'))
        .toThrowError(/number/i);
});
