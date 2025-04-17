const form = document.querySelector('form');
const errorP = document.getElementById('error');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    const pass = form.pass.value;
    if(!JSON.parse(localStorage.getItem('data'))){
        errorP.textContent = 'You dont have an account!';
    }else{
        const data = JSON.parse(localStorage.getItem('data'));
        let correctUsername = false;
        let correctPass = false;
        if(username === data.username){
            correctUsername = true;
        };
        if(pass === data.password){
            correctPass = true;
        };
    
        if(!correctUsername){
            errorP.textContent = 'Invalid username!';
        }else if(!correctPass){
            errorP.textContent = 'Invalid password!';
        };
    
        if(correctUsername && correctPass){
            window.open('/group 34/level 140/homework/task 02/homework2.html', '_self');
        };
    };
});