// 1
const car = {
    brand: "Mercedes",
    model: "G class",
    year: 2022,
}

// 2
console.log(car.brand);
console.log(car.year);

// 3
car.color = "black";

// 4
car.year = 2024;

// 5
delete car.model;

// 6
car.engine = function startEngine() {
    console.log("Engine started")
};

// 7
car.owner = {
    name: "luka",
    age: 16,
};