import {shop} from './shop.js'; 

export function login(){
    const regLoginDiv = document.getElementById('reg-login-div');
    regLoginDiv.innerHTML = `
        <b id="reg-login-b">Login</b>
        <form id="login-form">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" required>

            <label for="password" id="pass-lab">Password</label>
            <input type="password" name="password" id="password" required>

            <button>Login</button>
        </form>
        <p id="login-error"></p>
    `;
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const username = loginForm.username.value;
        const pass = loginForm.password.value;
        if(!JSON.parse(localStorage.getItem('data'))){
            loginError.textContent = 'You dont have an account!';
        }else{
            const data = JSON.parse(localStorage.getItem('data')); // Getting data from localStorage
            let correctUsername = false;
            let correctPass = false;
            if(username === data.username){
                correctUsername = true;
            };
            if(pass === data.password){
                correctPass = true;
            };
        
            if(!correctUsername){
                loginError.textContent = 'Invalid username!';
            }else if(!correctPass){
                loginError.textContent = 'Invalid password!';
            };
        
            if(correctUsername && correctPass){
                shop();
            };
        };
    });
};