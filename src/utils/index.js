// eslint-disable-next-line import/prefer-default-export
export const wait = (ms, fulfill = true) => new Promise((res, rej) => {
    setTimeout(() => {
        if (fulfill) {
            res(ms);
        }
        rej(ms);
    }, ms);
});
