const userName = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const rePass = document.getElementById('re-pass');

pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        rePass.disabled = false;
        rePass.placeholder = '';
        rePass.style.cursor = 'text';
    }else{
        rePass.disabled = true;
        rePass.placeholder = 'Enter Password First';
        rePass.value = '';
        rePass.style.cursor = 'not-allowed';
    };
});

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    if(pass.value.length >= 8 && pass.value == rePass.value){
        localStorage.setItem('data', JSON.stringify([userName.value, email.value, pass.value]));
        window.open('http://127.0.0.1:5500/group%2034/level%20125/homework/main/homework.html', '_self');
    }else{
        alert('Password Should Be 8 Symbols Minimum!')
    };
});