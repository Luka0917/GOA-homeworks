function func(arr, callback){
    let result = [];
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        setTimeout(function(){
            result.push(arr[i] * arr[i]);
            count++;
            if(count === arr.length){
                callback(result);
            };
        }, 1000 * i);
    };
};
function callback(result){
    console.log(`Squared numbers: ${result}`);
};

func([1, 2, 3, 4], callback);