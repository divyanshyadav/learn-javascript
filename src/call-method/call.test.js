import Functions from './call';

test('context of both functions', () => {
    const f = new Functions();

    expect(f.arrow.call({})).toEqual(f);
    expect(f.normalFn.call({})).toEqual({});
});
