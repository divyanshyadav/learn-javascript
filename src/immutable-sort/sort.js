const ascending = (a, b) => a - b;

const sort = (array, comparator = ascending) => {
    const copy = array.slice();
    copy.sort(comparator);
    return copy;
};

export default sort;
