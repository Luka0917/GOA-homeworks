function func(color, callback){
    setTimeout(() => {
        callback(color);
    }, 2000);
};
function callback(color){
    document.querySelector('h1').style.color = color;
};

document.querySelector('button').addEventListener('click', () => {
    func('red', callback);
});