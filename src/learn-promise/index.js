const wait = (ms, shouldResolves = true) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shouldResolves) {
            resolve();
        }
        reject();
    }, ms);
});


// let promise = wait(0, true);

// promise.then(() => {
//     console.log('first resolved');
//     // wait(5000, true);
// }, () => {
//     console.log('first rejected');
// });

// promise.then(() => {
//     console.log('second resolved');
// }, () => {
//     console.log('second rejected');
// });

// promise.catch(() => {
//     console.log('catch 1');
// });


// promise.catch(() => {
//     console.log('catch 2');
// });


// const unResolvedPromise = new Promise(() => {});
// unResolvedPromise.then(() => {
//     console.log('from unResolvedPromise');
// }, () => {
//     console.log('from unResolvedPromise');
// });


// promise = Promise.resolve();
// for (let i = 0; i < 10; i++) {
//     promise = promise.then(() => {
//         console.log(i);
//         return wait(1000);
//     });
// }

// [0, 1, 2, 3].reduce((acc, value) => acc.then(() => {
//     console.log(value);
//     return wait(1000);
// }), Promise.resolve());


// Job

// const promise = Promise.resolve(1);
// const newPromise = promise.then((res) => res);

// console.log(promise, newPromise);


new Promise((res, rej) => {
    res(new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    }));
}).then((res) => {
    console.log(res);
});
