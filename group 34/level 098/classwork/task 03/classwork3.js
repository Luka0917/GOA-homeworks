function letterCount(text){
    let result = {};

    for(let i of text){
        if(result[i]){
            result[i] += 1;
        }else{
            result[i] = 1;
        };
    };
    
    console.log(result);
};

letterCount("hello my name is luka");