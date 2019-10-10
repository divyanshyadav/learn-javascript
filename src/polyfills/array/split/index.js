/* eslint-disable max-classes-per-file */

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.len = 0;
    }

    push(data) {
        const newNode = new Node(data);
    }

    get length() {
        return len;
    }
}


const subString = (string, start, end) => {
    let str = '';
    for (let i = start; i < end; i++) {
        str += string.charAt(i);
    }
    return str;
};

const lastIndexOf = (string, delimiter) => {
    let pos = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === delimiter.charAt(0)) {
            if (subString(string, i, i + delimiter.length) === delimiter) {
                pos = i;
            }
        }
    }

    return pos;
};


const split = (string, delimiter) => {
    const len = string.length;
    const delimiterLength = delimiter.length;
    const splitArray = [];
    let charDelimiter = 0;

    if ((delimiterLength === 0 && string.length > 0) || delimiterLength > len) {
        splitArray.push(string);
        return splitArray;
    }

    if (delimiterLength === 0 && string.length === 0) {
        return splitArray;
    }

    const last = lastIndexOf(string, delimiter);
    for (let i = 0; i < len; i++) {
        const check = delimiterLength === 1
            ? string.charAt(i) === delimiter
            : subString(string, i, i + delimiterLength) === delimiter;

        if (check) {
            if (charDelimiter > i) {
                continue;
            }

            splitArray.push(subString(string, charDelimiter, i));

            if (i === last) {
                splitArray.push(subString(string, last + delimiterLength, len));
            }

            charDelimiter = i + delimiterLength;
        }
    }
    return splitArray;
};


export default split;
