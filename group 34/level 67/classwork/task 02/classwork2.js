// 1
function person(name, age){
    console.log(`Hi I am ${name} and I am ${age} years old.`)
}

const person1 = new person("luka", 16);

// 2
function car(brand, year = 2020){
    console.log(`This is a ${brand} from ${year}.`)
}

const car1 = new car("BMW", 2002);

// 3
function library(name, books){
    console.log(`Books in ${name}:`)
    for (let book of books){
        console.log(book);
    }
}

// 4
function rectangle(width, height){
    console.log(width * height);
}

// 5
function student(name, marks){
    for (let i of marks){
        if (i > 50){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
}

// 6
function counter(){
    let value = 0;

    return {
        increment: function() {
            value += 1;
        },
        getValue: function() {
            return value
        }
    };
}

// 7
function phone(brand, model, price){
    console.log(`This is an ${brand} ${model} priced at ${price} USD.`)
}