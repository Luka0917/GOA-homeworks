const form = document.getElementById("main-form");
const button = document.getElementById("submit");
const dataBase = {}

function validateForm(){
    const name = form.elements.name;
    const email = form.elements.email;
    const pass = form.elements.password;
    const checkBox = document.getElementById("checkbox");
    if (name.value === "" || email.value === "" || pass.value === "") {
        alert("Please fill out all fields!");
    }
    else if(pass.value < 8) {
        alert("Password is short!");
    }
    else {
        dataBase.name = name.value
        dataBase.eamil = email.value
        dataBase.password = pass.value
        console.log(dataBase)
    }
}

button.onclick = validateForm;