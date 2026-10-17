function checkPassword(password){
    let score = 0;
    let missing = [];

    if(password.length >= 8){ score++ }else{ missing.push("At least 8 characters") };
    if(/[0-9]/.test(password)){ score++ }else{ missing.push("Add a number") };
    if(/[A-Z]/.test(password)){ score++ }else{ missing.push("Add an uppercase letter") };
    if(/[a-z]/.test(password)){ score++ }else{ missing.push("Add a lowercase letter") };
    if(/[!@#$%^&*()_+/]/.test(password)){ score++ }else{ missing.push("Add a special character") };

    console.log("Score: " + score + "/5");

    if(score <= 2){
        console.log("Password is weak");
    }else if(score <= 4){
        console.log("Password is medium");
    }else{
        console.log("Password is strong!");
    }

    if(missing.length > 0){
        console.log("Suggestions:");
        missing.forEach(item => console.log("- " + item));
    }
}

checkPassword("Hello123!");