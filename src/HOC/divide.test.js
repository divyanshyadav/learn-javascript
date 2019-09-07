import divide from './divide'

test('divide with no arguments', () => {
    expect(() => divide())
      .toThrowError(/0/i);
})

test('divide with no second argument', () => {
    expect(() => divide(1))
      .toThrowError(/1/i);
})

test('divide by zero', () => {
    expect(() => divide(1, 0))
      .toThrowError(/zero/i);
})