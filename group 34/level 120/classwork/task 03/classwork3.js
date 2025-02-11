function func(set1, set2){
    let result = new Set();
    
    set1.forEach(item => {
        if (!set2.has(item)){
            result.add(item);
        };
    });
    set2.forEach(item => {
        if (!set1.has(item)){
            result.add(item);
        };
    });
    return result;
};

console.log(func(new Set([1, 2, 3]), new Set([3, 4, 5])));