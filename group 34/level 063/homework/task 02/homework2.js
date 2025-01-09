// 1
function greet(name = "Guest"){
    console.log("Hello " + name)
};

// 2
function addNumbers(num1, num2 = 0){
    console.log(num1 + num2)
};

// 3
function calculateArea(height, width = 1){
    console.log(height * width)
};

// 4
function convertTemperature(temperature = "c", scale){
    if (temperature === "c") {
        console.log(scale * (9 / 5) + 32)
    }
    else {
        console.log((scale - 32) * 5/9)
    }
}

// 5
function addToShoppingList(item, quantity = 1){
    console.log(item * quantity)
}

// 6
function numberPower(number, power = 2){
    console.log(number ** power)
}

// 7
function createMessage(name, greeting = "Hello"){
    console.log(greeting + " " + name)
}

// 8
function applyDiscount(price, discount = 10){
    console.log(price - ((price * discount) / 100))
}

// 9
function introduce(name, age = "Unknown", country = "Unknown"){
    console.log("Hello my name is " + name + " I am " + age + " years old and i am from " + country)
}

// 10
function calculatePrice(price, tax = 5){
    console.log(price + ((price * tax) / 100))
}

// 11
function findMax(number1, number2, number3){
    if (number1 > number2 && number1 > number3){
        console.log(number1)
    }
    else if (number2 > number1 && number2 > number3){
        console.log(number2)
    }
    else if (number3 > number1 && number3 > number2){
        console.log(number3)
    }
    else if (number1 == number2 || number1 == number3){
        console.log(number1)
    }
    else if (number2 == number3 || number2 == number3){
        console.log(number2)
    }
    else{
        console.log("They are equal!")
    }
}

// 12
function passOrFail(score){
    if (score >= 50){
        console.log("Pass")
    }
    else{
        console.log("Fail")
    }
}

// 13
function sumOfNumbers(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++ ){
        sum += numbers[i];
    }
    console.log(sum)
}

// 14
function countEvens(nums){
    const evenNumbers = []
    for (let i of nums){
        if (i % 2 === 0){
            evenNumbers.push(i)
        }
    }
    console.log(evenNumbers)
}