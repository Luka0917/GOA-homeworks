const body = document.querySelector('body');
const name = document.getElementById('name');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass-2');
const age = document.getElementById('age');

name.addEventListener('input', () => {
    if(name.value.length >= 1 && name.value.length <= 3){
        name.style.backgroundColor = 'red';
        name.style.color = 'white';
    }else{
        name.style.backgroundColor = 'white';
        name.style.color = 'black';
    };
});

pass.addEventListener('input', () => {
    const specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '{', '}', '[', ']', '\\', '|', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`', '¬', '©', '®', '€', '£', '¥', '¢'];
    let haveOneUpper = false;
    let haveNum = false;
    let haveSpecialSymbol = false;
    for(let i = 0; i < pass.value.length; i++){
        if(pass.value[i].toUpperCase() === pass.value[i]){
            haveOneUpper = true;
        };
        if(!isNaN(pass.value[i])){
            haveNum = true;
        };
        for(let x = 0; x < specialSymbols.length; x++){
            if(pass.value[i] == specialSymbols[x]){
                haveSpecialSymbol = true;
            };
        };
    };
    if(haveOneUpper && haveNum && haveSpecialSymbol && pass.value.length >= 0 && pass.value.length <= 8 || pass.value == ''){
        pass.style.backgroundColor = "white";
        pass.style.color = "black";
    }else{
        pass.style.backgroundColor = "red";
        pass.style.color = "white";
    };
});

pass2.addEventListener('input', () => {
    if(pass2.value != pass.value){
        pass2.style.backgroundColor = 'red';
        pass2.style.color = 'white';
    }else{
        pass2.style.backgroundColor = 'white';
        pass2.style.color = 'black';
    };
});

age.addEventListener('input', () => {
    if(age.value >= 1 && age.value < 18){
        age.style.backgroundColor = 'red';
        age.style.color = 'white';
    }else{
        age.style.backgroundColor = 'white';
        age.style.color = 'black';
    }
})

document.querySelector('form').addEventListener('submit', () => {
    body.innerHTML = `<h1>Form Sent!</h1>`;
});