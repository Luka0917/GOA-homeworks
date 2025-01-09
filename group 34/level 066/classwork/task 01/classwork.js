function ageValidate(){
    const age = document.getElementById("form-1");
    if (age.element.age.value >= 18) {
        console.log("You are an adult!")
    }
    else {
        console.log("You are a kid!");
    }
}