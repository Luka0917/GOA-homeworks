// Animals
class animals{
    constructor(species, age, livesIn){
        this.species = species;
        this.age = age;
        this.livesIn = livesIn;
    };
    animalText(){
        return `${this.species} is ${this.age} years old and lives in ${this.livesIn}`;
    };
};

const animal1 = new animals("lion", 8, "Africa");
console.log(animal1);
console.log(animal1.animalText());

console.log("");

const animal2 = new animals("dog", 3, "appartement");
console.log(animal2);
console.log(animal2.animalText());

console.log("");

const animal3 = new animals("cat", 10, "animal shelter");
console.log(animal3);
console.log(animal3.animalText());

// Cars
class car{
    constructor(year, car, color){
        this.year = year;
        this.car = car;
        this.color = color;
    };
    carText(){
        return `${this.car} is ${this.color} from ${this.year}`;
    };
};

const car1 = new car(2002, "BMW", "red");
console.log(car1);
console.log(car1.carText());

console.log("");

const car2 = new car(2022, "Toyota", "white");
console.log(car2);
console.log(car2.carText());

console.log("");

const car3 = new car(1996, "Mercedes", "black");
console.log(car3);
console.log(car3.carText());

// Person
class person{
    constructor(name, age, profession){
        this.name = name;
        this.age = age;
        this.profession = profession;
    };
    personText(){
        return `${this.name} is ${this.age} years old and is ${this.profession}`;
    };
};

const person1 = new person("Gia", 30, "architect");
console.log(person1);
console.log(person1.personText());

console.log("");

const person2 = new person("Nika", 22, "programmer");
console.log(person2);
console.log(person2.personText());

console.log("");

const person3 = new person("Levan", 40, "mechanic");
console.log(person3);
console.log(person3.personText());