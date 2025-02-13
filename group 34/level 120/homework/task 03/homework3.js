function func(map){
    let result = [];
    let max = 0;
    
    for(let [key, value] of map){
        if(value >= max){
            max = value;
            result.push(key);
        };
    };
    return result;
};

console.log(func(new Map([['a', 5], ['b', 3], ['c', 5]])));