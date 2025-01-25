function uniqueElements(arr){
    let counts = {};

    for(let i of arr){
        for(let x of i){
            if(counts[x]){
                counts[x] += 1;
            }else{
                counts[x] = 1;
            };
        };
    };
    
    let unique = [];
    for(let i in counts){
        if(counts[i] === 1){
            unique.push(i);
        };
    };

    return unique;
};

console.log(uniqueElements([
    [1, 2, 3],
    [4, 2, 1],
    [5, 6, 7]
]));