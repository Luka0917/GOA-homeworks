function func(set1, set2){
    for(let i of set1){
        if(set2.has(i)){
            return true;
        };
        return false;
    };
};

console.log(func(new Set([1, 2]), new Set([1, 2, 3])));
console.log(func(new Set([1, 2]), new Set([3, 4, 5])));