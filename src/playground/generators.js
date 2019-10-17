/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable immutable/no-let */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */

(function () {
    let x = 1;

    function* sample() {
        incrementX();
        yield;
        console.log(x);
    }

    function incrementX() {
        x += 1;
    }

    const gen = sample();
    console.log(x);

    gen.next();
    console.log(x);

    incrementX();
    gen.next();
});


(function () {
    function* evaluate(x) {
        const sum = x + (yield 'What is y?');
        return sum;
    }

    const sum = evaluate(5);
    const message = sum.next(5).value;
    console.log(message);
    const ans = sum.next(5).value;
    console.log(ans);
});

(function () {
    function* generator() {
        const x = yield 1;
        const y = yield x;
        console.log(y);
    }

    const gen = generator();

    console.log(gen.next().value);
    console.log(gen.next(2).value);
    console.log(gen.next(3));
});


(function () {
    function* countGenerator() {
        try {
            let value = 0;

            while (true) {
                value += 1;
                yield value;
            }
        } finally {
            console.log('finished');
        }
    }

    const counter = countGenerator();

    for (const value of counter) {
        console.log(value);

        if (value === 3) {
            // break; // Sends signal to counter iterator to terminate
            // or
            counter.return('hello.');
        }
    }

    // This will not work because iterator is already terminated
    console.log(counter.next());
}());
