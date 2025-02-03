function filterNumbers(arr, int){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= int){
            result.push(arr[i]);
        };
    };
    return result;
};
console.log(filterNumbers([3, 4, 5, 6, 9, 1], 5));