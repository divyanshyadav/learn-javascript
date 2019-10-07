import split from './solution';


describe('test string spiting on the bases of delimiter', () => {
    test('case 1', () => {
        const input = 'a b c';
        const expectedOutput = ['a', 'b', 'c'];

        expect(split(input, ' ')).toEqual(expectedOutput);
    });


    test('case 2', () => {
        const input = 'a,b,c';
        const expectedOutput = ['a', 'b', 'c'];

        expect(split(input, ',')).toEqual(expectedOutput);
    });


    test('case 3', () => {
        const input = 'a, b, c';
        const expectedOutput = ['a', 'b', 'c'];

        expect(split(input, ', ')).toEqual(expectedOutput);
    });

    test('case 4', () => {
        const input = 'abc,  def,  ghi';
        const expectedOutput = ['abc', 'def', 'ghi'];

        expect(split(input, ',  ')).toEqual(expectedOutput);
    });

    test('case 5', () => {
        const input = 'abc,  def,  ghi';
        const expectedOutput = [input];

        expect(split(input, '')).toEqual(expectedOutput);
    });


    test('case 6', () => {
        const input = '';
        const expectedOutput = [];

        expect(split(input, '')).toEqual(expectedOutput);
    });

    test('case 7', () => {
        const input = 'aaaaaaabbbbbaaaaaaaaaaabbbbaaaasdfasdfasbbbbbasdfasdfbbbbbasfasdfasdbbbbb';
        const expectedOutput = [
            'aaaaaaa',
            'aaaaaaaaaaabbbbaaaasdfasdfas',
            'asdfasdf',
            'asfasdfasd',
            '',
        ];

        expect(split(input, 'bbbbb')).toEqual(expectedOutput);
    });

    test('case 8', () => {
        const input = 'abc  abc   abc';
        const expectedOutput = ['abc  abc', 'abc'];

        expect(split(input, '   ')).toEqual(expectedOutput);
    });

    test('case 9', () => {
        const input = 'abc';
        const expectedOutput = [input];

        expect(split(input, 'abcd')).toEqual(expectedOutput);
    });

    test('case 10', () => {
        const input = 'abc....abc......';
        const expectedOutput = [
            'abc',
            '.abc',
            '',
            '',
        ];

        expect(split(input, '...')).toEqual(expectedOutput);
    });

    test('case 11', () => {
        const input = '....abc.....abc...';
        const expectedOutput = [
            '',
            '.abc',
            '..abc',
            '',
        ];

        expect(split(input, '...')).toEqual(expectedOutput);
    });

    test('case 12', () => {
        const input = 'a...';
        const expectedOutput = [
            'a',
            '',
        ];

        expect(split(input, '...')).toEqual(expectedOutput);
    });

    test('case 13', () => {
        const input = 'a..b';
        const expectedOutput = [
            'a',
            '',
            'b',
        ];

        expect(split(input, '.')).toEqual(expectedOutput);
    });

    test('case 14', () => {
        const input = '.a.';
        const expectedOutput = [
            '',
            'a',
            '',
        ];

        expect(split(input, '.')).toEqual(expectedOutput);
    });

    test('case 15', () => {
        const input = '.a...a.b';
        const expectedOutput = [
            '',
            'a',
            '',
            '',
            'a',
            'b',
        ];

        expect(split(input, '.')).toEqual(expectedOutput);
    });
});
