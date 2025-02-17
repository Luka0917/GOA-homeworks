function greet(name, callback){
    setTimeout(function(){
        callback(`Hello, ${name}!`);
    }, 2000);
};
function callback(text){
    console.log(text);
};

greet("Luka", callback);