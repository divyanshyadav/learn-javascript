/* eslint-disable no-shadow */
/* eslint-disable immutable/no-mutation */
/* eslint-disable import/prefer-default-export */

const length = (array) => array.reduce((count) => count + 1, 0);

export const reject = (val) => new Promise((_, rej) => rej(val));

export const resolve = (val) => new Promise((res) => res(val));

export const all = (array) => new Promise((res, reject) => {
    const results = [];

    const checkEnd = () => {
        if (array.length === length(results)) {
            res(results);
        }
    };

    array.forEach((fn, index) => {
        resolve(fn).then((result) => {
            results[index] = result;
            checkEnd();
        }).catch((error) => {
            reject(error);
        });
    });
});

export const race = (array) => new Promise((resolve, reject) => array.forEach((fn) => fn
    .then((result) => resolve(result))
    .catch((error) => reject(error))));

export const allSettled = (array) => new Promise((res) => {
    const results = [];

    const checkEnd = () => {
        if (array.length === length(results)) {
            res(results);
        }
    };

    array.forEach((fn, index) => {
        resolve(fn).then((res) => {
            results[index] = res;
            checkEnd();
        }).catch((error) => {
            results[index] = error;
            checkEnd();
        });
    });
});

export const forEach = (array, fn) => {

};

export const map = (array, fn) => {

};

export const some = (array, fn) => {

};

export const every = (array, fn) => {

};
