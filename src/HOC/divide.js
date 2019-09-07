const argumentIstEmpty = index => fn => (...args) => {
    if (args[index] === undefined || args[index] === null) {
        throw new Error(`Argument at index ${index} should not be empty`)
    }

    return fn(...args)
}

const argumentIstZero = index => fn => (...args) => {
    if ( args[index] === 0 ) {
        throw new Error(`Argument at index ${index} should not be zero`)
    }

    return fn(...args)
}

const checks = [
    argumentIstEmpty(0),
    argumentIstEmpty(1),
    argumentIstZero(1),
]

const divide = (x, y) => x / y

const safeDivide = checks
    .reverse()
    .reduce((prev, check) => check(prev), divide)

export default safeDivide