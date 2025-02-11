function func(sets){
    let result = new Set();
    for(let i = 0; i < sets.length; i++){
        for(let x of sets[i]){
            result.add(x);
        };
    };
    return result;
};

console.log(func([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));