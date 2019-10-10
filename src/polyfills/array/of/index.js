function myOf() {
    const array = [];
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }
    return array;
}

export default myOf;
