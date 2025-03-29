const arr = [1, 2, 3, 4, 5];

arr.forEach(el => el + 2);
arr.forEach(el => el * 2);
arr.forEach(el => Math.pow(el, 2));
arr.forEach(el => Math.pow(el, 3));
arr.forEach(el => el * 3);

let map_1 = arr.map(el => el + 2);
let map_2 = arr.map((_, index) => index * 2);
let map_3 = arr.map((el, index) => {
    if(index % 2 == 0){
        return el * 2
    }else{
        return el * 3
    };
});
let map_4 = arr.map(el => Math.pow(el, 2));
let map_5 = arr.map(el => Math.pow(el, 4));
console.log(map_1);
console.log(map_2);
console.log(map_3);
console.log(map_4);
console.log(map_5);

let reduce_1 = arr.reduce(acc => acc + 2);
let reduce_2 = arr.reduce((acc, el) => acc * el);
let reduce_3 = arr.reduce((acc, el, index) => acc + el + index);
let reduce_4 = arr.reduce((acc, el, index) => acc * el * index);
let reduce_5 = arr.reduce((acc, el) => {
    if(acc % 2 == 0){
        return acc + el;
    }else{
        return acc + 2;
    };
});
console.log(reduce_1);
console.log(reduce_2);
console.log(reduce_3);
console.log(reduce_4);
console.log(reduce_5);