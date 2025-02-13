function func(map){
    let result = new Map();
    
    for(let [key, value] of map){
        result.set(value, key);
    };
    return result;
};

console.log(func([['a', 1], ['b', 2], ['c', 1]]));