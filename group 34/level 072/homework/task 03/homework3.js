const colors = ['red', 'green', 'blue', 'yellow', 'pink'];

let index = 0;

setInterval(function(){
    document.body.style.backgroundColor = colors[index];
    index++;
    if (index >= colors.length){
        index = 0;
    }
}, 3000);