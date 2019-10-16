/* eslint-disable no-restricted-syntax */
/* eslint-disable immutable/no-let */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */

/*
    Producers and Iterators
    Iterables: Data structure with has a method to generate a iterator
               that can iterate over its values.
*/

// Stateful producer(iterator) using Function Closure

(function () {
    const counter = () => {
        let nextValue;

        return () => {
            if (nextValue === undefined) {
                nextValue = 1;
            } else {
                nextValue += 1;
            }
            return nextValue;
        };
    };

    const counterA = counter();
    console.log(counterA());
    console.log(counterA());
    console.log(counterA());
});

// Implementing Standard Iterator Interface.

(function () {
    const counterIterator = () => {
        let nextValue;

        return {
            [Symbol.iterator]() { // ES6: Computed property name
                return this;
            },
            next: () => {
                if (nextValue === undefined) {
                    nextValue = 1;
                } else {
                    nextValue += 1;
                }

                /*
                    value: current computed value
                    done: iterator complete status
                */
                return { value: nextValue, done: false };
            },
        };
    };

    const counterIteratorA = counterIterator();
    const counterIteratorB = counterIterator();

    console.log(counterIteratorA.next());
    console.log(counterIteratorB.next());

    // ES6 for..of can consume iterator
    for (const value of counterIteratorA) {
        if (value === 4) { break; }
        console.log(value);
    }
}());
