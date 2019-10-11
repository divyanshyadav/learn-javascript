/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
const { wait } = require('../../utils');

const print = (res) => console.log('Result :', res);
const printError = (error) => console.log('Error  :', error.message);


// Promise.resolve(1)
//     .then(null, printError) // automatically returns a new promise
//     .then(null, printError)
//     .then(print);

// Promise.reject(new Error('Some error occurred!'))
//     .then(print)
//     .then(print)
//     .then(null, printError);

// Promise.resolve('passed')
//     .then(print, null)
//     .then(() => { throw new Error('crashed!!'); }, null)
//     .catch(printError) // same as .then(null, printError)
//     .then(() => { print('success'); }, null);

// const resolvedPromise = Promise.resolve();
// const newPromise = resolvedPromise.then();
// console.log(newPromise, resolvedPromise);


// const rejectedPr = {
//     then: (_, reject) => {
//         reject('oops');
//     },
// };

// Promise.resolve(rejectedPr)
//     .then(print, printError)


// Promise.resolve('passed')
//     .then(print, null)
//     .then(() => { throw new Error('crashed!!'); }, null)
//     .then(null, (error) => {
//         printError(error);
//         // throw error;
//     })
//     .then(() => { print('success'); }, null);
// .catch(printError);

const promises = [
    () => wait(1),
    // wait(20),
    // wait(1),
    () => wait(2, false),
];


// prom.then((res) => {
//     console.log(res);
// })
//     .catch((error) => console.log(error));


// const prom = wait(100, false);

// wait(10)
//     .then(() => {
//         console.log(prom);
//         return prom;
//     })
//     .then((res) => {
//         console.log(res);
//     }, (error) => {
//         console.log(error);
//     });

const settleAll = (promises) => {
    const result = [];

    return promises.reduce((acc, promise) => acc
        .then(() => promise())
        .then((res) => result.push(res),
            (err) => result.push(err)),
    Promise.resolve())
        .then(() => result);
};

// const mainAsync = async () => {
//     const res = await settleAll(promises);
//     console.log(res);
// };

const main = () => {
    settleAll(promises).then((res) => {
        console.log(res);
    });
};

main();
