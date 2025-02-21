function func(callback){
    let name = prompt('Please Enter Your Name:');
    setTimeout(() => {
        callback(name);
    }, 3000);
};
function callback(name){
    alert(`Thank You For Helping ${name}`);
};

func(callback);