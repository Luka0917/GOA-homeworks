// 1
function multiply(){
    let num1 = prompt("Enter first number:")
    let num2 = prompt("Enter second number:")
    num1 = Number(num1)
    num2 = Number(num2)
    console.log(num1 * num2)
};

// 2
function subtract(){
    let num1 = prompt("Enter first number:")
    let num2 = prompt("Enter second number:")
    num1 = Number(num1)
    num2 = Number(num2)
    if (num1 > num2){
        console.log(num1 - num2)
    }
    else {
        console.log(num2 - num1)
    }
};

// 3
function divide(){
    let num1 = prompt("Enter first number:")
    let num2 = prompt("Enter second number:")
    num1 = Number(num1)
    num2 = Number(num2)
    if (num1 > num2){
        console.log(num1 / num2)
    }
    else {
        console.log(num2 / num1)
    }
};

// 4
function fullName(){
    let firstName = prompt("Enter first number:")
    let lastName = prompt("Enter second number:")
    console.log(firstName + lastName)
};

// 5
function minutesToSeconds(){
    let time = prompt("Enter time in minutes:")
    time = Number(time)
    console.log(time * 60)
};

// 6
function multiply(){
    let height = prompt("Enter height of rectangle:")
    let width = prompt("Enter width of rectangle:")
    height = Number(height)
    width = Number(width)
    console.log(height * width)
};

// 7
function multiply(){
    let str1 = prompt("Enter first string:")
    let str2 = prompt("Enter second string:")
    console.log(str1 + str2)
};

// 8
function power(){
    let base = prompt("Enter base number:");
    let exponent = prompt("Enter exponent number:");
    console.log(base ** exponent);
}

// 9
function circumference(){
    let radius = prompt("Enter circle's radius:")
    radius = Number(radius)
    console.log(2 * 3.14 * radius)
}

// 10
function nextNumber(){
    let num = prompt("Enter number:")
    num = Number(num)
    console.log(num + 1)
}