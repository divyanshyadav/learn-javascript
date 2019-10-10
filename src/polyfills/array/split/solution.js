/* eslint-disable no-plusplus */
/* eslint-disable immutable/no-let */

const split = (string, delimiter) => {
    if (string.length === 0 && delimiter.length === 0) {
        return [];
    }

    if (delimiter.length > string.length) {
        return [string];
    }

    const result = [];
    let current = '';

    for (let i = 0; i < string.length; i += 1) {
        if (string.charAt(i) === delimiter[0]) {
            let matched = true;
            let temp = string.charAt(i);
            for (let j = 1; j < delimiter.length; j++) {
                if (string.charAt(++i) !== delimiter.charAt(j)) {
                    matched = false;
                }
                temp += string.charAt(i);
            }
            if (matched) {
                result.push(current);
                current = '';
            } else {
                current += temp;
            }
        } else {
            current += string.charAt(i);
            if (i === string.length - 1) {
                result.push(current);
            }
        }
    }

    if (current === '') {
        result.push('');
    }

    return result;
};

// split('a...', '...');

export default split;
