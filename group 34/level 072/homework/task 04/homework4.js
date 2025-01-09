const p = document.getElementById("p-1");

const texts = ['Hello', 'World!', 'My name is', 'Luka', 'Tatuashvili'];

let index = 0;

setInterval(function(){
    p.textContent = texts[index];
    index++;
    if (index >= colors.length){
        index = 0;
    }
}, 5000);