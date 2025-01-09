function ageValidate(){
    let userAge = prompt("Enter Your age:");
    untilAdult = 18 - userAge;
    if(userAge < 18){
        alert(`You are a kid you still have to wait ${untilAdult} years!`);
    }
    else{
        alert("You are an adult!");
    }
}

ageValidate();