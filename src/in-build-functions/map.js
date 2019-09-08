const map = (array, fn) => array.reduce((acc, element) => [...acc, fn(element)], []);

export default map;
