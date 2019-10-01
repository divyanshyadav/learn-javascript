// eslint-disable-next-line import/prefer-default-export
export const wait = (ms) => new Promise((res) => {
    setTimeout(() => {
        res(ms);
    }, ms);
});
