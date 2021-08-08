const call = require('./call');

test('case 1', () => {
    const obj = { name: 'John' };
    function getName(greet) { return `${greet} ${this.name}`; }
    const result = call(obj, getName, 'hello');

    expect(result).toBe(`hello ${obj.name}`);
});
