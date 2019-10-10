import reduce from '.';


describe('Array reduce', () => {
    it('should exits', () => {
        expect(reduce).not.toBe(undefined);
    });

    it('should return a array', () => {
        const input = [1, 2, 3];
        const output = reduce(input, (acc, val) => acc + val, 0);
        expect(output).toEqual(6);
    });
});
