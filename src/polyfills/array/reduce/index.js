function reduce(array, fn, initialValue) {
    let value = initialValue
    array.forEach(item => {
        value = fn(value, item)
    })

    return value
}

export default reduce;
