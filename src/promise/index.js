/* eslint-disable no-shadow */
/* eslint-disable immutable/no-mutation */
/* eslint-disable import/prefer-default-export */

const length = (array) => array.reduce((count) => count + 1, 0);

export const reject = () => new Promise((_, rej) => rej());

export const resolve = () => new Promise((res) => res());

export const all = (array) => new Promise((resolve, reject) => {
    const results = [];

    const isFinished = () => {
        if (array.length === length(results)) {
            resolve(results);
        }
    };

    array.forEach((fn, index) => {
        fn.then((result) => {
            results[index] = result;
            isFinished();
        }).catch((error) => {
            reject(error);
        });
    });
});


export const race = (array) => new Promise((resolve, reject) => array.forEach((fn) => fn
    .then((result) => resolve(result))
    .catch((error) => reject(error))));

export const allSettled = (array) => new Promise((resolve) => {
    const results = [];

    const isFinished = () => {
        if (array.length === length(results)) {
            resolve(results);
        }
    };

    array.forEach((fn, index) => {
        fn.then((res) => {
            results[index] = res;
            isFinished();
        }).catch((error) => {
            results[index] = error;
            isFinished();
        });
    });
});
