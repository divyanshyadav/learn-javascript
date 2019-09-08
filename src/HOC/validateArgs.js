export const argumentIstEmpty = (index) => (fn) => (...args) => {
    if (args[index] === undefined || args[index] === null) {
        throw new Error(`Argument at index ${index} should not be empty`);
    }

    return fn(...args);
};

export const argumentIstZero = (index) => (fn) => (...args) => {
    if (args[index] === 0) {
        throw new Error(`Argument at index ${index} should not be zero`);
    }

    return fn(...args);
};

export const argumentIsNumber = (index) => (fn) => (...args) => {
    if (typeof args[index] !== 'number') {
        throw new Error(`Argument at index ${index} should be of type number`);
    }

    return fn(...args);
};
