const form = document.querySelector('form');
const errorP = document.getElementById('error');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const rePass = form.rePass.value;

    let passwordIs8SymbolsLong = false; 
    let haveNumber = false;
    let haveSymbol = false;
    let haveUpper = false;
    let passwordsAreEqual = false;
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '\\', '|', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?', '~', '`'];
    if(pass.length >= 8){
        passwordIs8SymbolsLong = true;
    }else{
        errorP.textContent = 'Password must be at least 8 characters long!';
    };
    for(let i = 0; i < pass.length; i++){
        if(pass[i] >= '0' && pass[i] <= '9'){
            haveNumber = true;
        }else if(symbols.includes(pass[i])){
            haveSymbol = true;
        }else if(pass[i] === pass[i].toUpperCase()){
            haveUpper = true;
        };
    };
    if(pass === rePass){
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
            username: username,
            email: email,
            password: pass,
        };
        localStorage.setItem('data', JSON.stringify(data));
        window.open('/group 34/level 140/homework/task 02/login/login.html', '_self');
    };
});
localStorage.clear();