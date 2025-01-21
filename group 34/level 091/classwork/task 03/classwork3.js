const body = document.querySelector('body');
const name = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass-2');
const age = document.getElementById('age');


const validInputs = [
    {name: "nika", password: "Nik@123!"},
    {name: "giorgi", password: "Giorgi12!a"},
    {name: "mariam", password: "Mariam34$k"},
    {name: "nino", password: "Nino56#j"},
    {name: "luka", password: "Luka78@z"},
    {name: "ana", password: "Ana90%v"},
    {name: "davit", password: "Davit11&b"},
    {name: "levan", password: "Levan33+q"},
    {name: "elene", password: "Elene23*o"},
    {name: "tornike", password: "Toko99#t"}
]

document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    // name & password
    let nameValid = false;
    let passValid = false;
    for(let i = 0; i < validInputs.length; i++){
        if(name.value === validInputs[i].name){
            nameValid = true;
        }else if(pass.value === validInputs[i].password && pass.value === pass2.value){
            passValid = true;
        };
    };
    // email
    let haveSymbol = false;
    let havePoint = false;
    let haveEnding = false;
    let notHaveSpace = true;
    let validEndings = ["com", "org", "net"];
    for(let i = 0; i < email.value.length; i++){
        if(email.value[i] === "@"){
            haveSymbol = true;
        };
        if(haveSymbol && email.value[i] === "."){
            havePoint = true;
        };
        if(email.value[i] === " "){
            notHaveSpace = false;
        };
    };
    for(let ending of validEndings){
        if(email.value.endsWith(ending)){
            haveEnding = true;
            break;
        };
    };
    let ageValid = false;
    // age
    if(age.value >= 18){
        ageValid = true;
    }
    if(nameValid && passValid && haveSymbol && havePoint && haveEnding && notHaveSpace && ageValid){
        console.log(true);
    }else{
        console.log(false);
    }
});