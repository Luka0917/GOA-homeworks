let arr = ["pc", "laptop", "phone", "shoes", "clothes", "TV"];

const obj = {};

for(let i = 1; i < arr.length; i++){
    obj[i] = arr[i];
};

console.log(obj);