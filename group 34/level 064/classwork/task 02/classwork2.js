const form = document.getElementById("main-form");
const button = document.getElementById("submit");

function validateForm(){
    const name = form.elements.name;
    const email = form.elements.email;
    const pass = form.elements.password;
    const checkBox = document.getElementById("checkbox");
    if (name.value === "" || email.value === "" || pass.value === "") {
        alert("Please fill out all fields!");
    }
    else if(pass.value >= 8) {
        alert("Password is long!");
    }
    else if(checkBox.checked === false) {
        alert("Mark the check box!")
    }
    else {
        console.log(name.value);
        console.log(email.value);
        console.log(pass.value);
    }
}

button.onclick = validateForm;