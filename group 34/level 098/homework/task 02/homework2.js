function letterCount(text){
    let count = {};

    for(let i of text){
        if(count[i]){
            count[i] += 1;
        }else{
            count[i] = 1;
        };
    };
    
    let result = []
    for(let i in count){
        if(count[i] >= Math.max(...Object.values(count))){
            result.push(i);
        }
    }
    
    console.log(result);
};

letterCount("hello my name is luka");