import {login} from './login.js';

const form = document.getElementById('reg-form');
const errorP = document.getElementById('error');

form.addEventListener('submit', e => {
    e.preventDefault();
    const regUsername = form.username.value;
    const regEmail = form.email.value;
    const regPass = form.password.value;

    let passwordIs8SymbolsLong = false; 
    let haveNumber = false;
    let haveSymbol = false;
    let haveUpper = false;
    let passwordsAreEqual = false;
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '\\', '|', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?', '~', '`'];
    if(regPass.length >= 8){
        passwordIs8SymbolsLong = true;
    }else{
        errorP.textContent = 'Password must be at least 8 characters long!';
    };
    for(let i = 0; i < regPass.length; i++){
        if(regPass[i] >= '0' && regPass[i] <= '9'){
            haveNumber = true;
        }else if(symbols.includes(regPass[i])){
            haveSymbol = true;
        }else if(regPass[i] === regPass[i].toUpperCase()){
            haveUpper = true;
        };
    };
    if(regPass === regPass){
        passwordsAreEqual = true;
    }else{
        errorP.textContent = 'Passwords do not match!';
    };

    if(!haveNumber){
        errorP.textContent = 'Password must have at least one number!';
    }else if(!haveSymbol){
        errorP.textContent = 'Password must have at least one special symbol!';
    }else if(!haveUpper){
        errorP.textContent = 'Password must have at least one uppercase letter!';
    };

    if(passwordIs8SymbolsLong && haveNumber && haveSymbol && haveUpper && passwordsAreEqual){
        const data = {
            username: regUsername,
            email: regEmail,
            password: regPass,
        };
        localStorage.setItem('data', JSON.stringify(data));
        login();
    };
});