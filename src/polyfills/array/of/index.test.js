import myOff from '.';


describe('Array of method', () => {
    it('should exits', () => {
        expect(myOff).not.toBe(undefined);
    });

    it('should return a array', () => {
        const input = [1, 2, 3, 4, 'oo'];
        const output = myOff(...input);
        expect(output).toEqual(input);
    });
});
