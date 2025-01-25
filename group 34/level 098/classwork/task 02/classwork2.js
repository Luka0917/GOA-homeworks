function objArr(arr){
    for(let i of arr){
        for(let x in i){
            console.log(`${x}: ${i[x]}`);
        };
    };
};

objArr([{name: 'lasha', age: 30}, {name: 'merabi', age: 15}]);