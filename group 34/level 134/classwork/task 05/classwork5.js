const matrix = [['name', 'luka'], ['age', 16], ['city', 'Tbilisi']];

let result = matrix.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
}, {});
console.log(result);