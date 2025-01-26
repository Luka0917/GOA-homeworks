function manualDestructing(obj){
    const values = [];
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            values.push(obj[key]);
        };
    };
    return values;
};

const inObj = {a: 1, b: 3, c:4};
console.log(manualDestructing(inObj));