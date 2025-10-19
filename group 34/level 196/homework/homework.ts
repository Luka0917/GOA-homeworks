function printId(some: string | number): string | number{
    if(typeof some === 'string'){
        return `ID string: ${some}`;
    }else{
        return `ID number: ${some}`;
    };
};
console.log(printId("luka"));
console.log(printId(16));


function getLength(some: string | string[]): number{
    return some.length;
};
console.log(getLength("luka"));
console.log(getLength(['luka', 'toko', 'gia']));


function strOrNum(some: string | number): boolean | undefined{
    if(typeof some === 'number' && some > 0){
        return false;
    }else if(typeof some === 'number' && some < 0){
        return true;
    }else if(typeof some === 'string' && some === ''){
        return false;
    }else if(typeof some === 'string' && some != ''){
        return true;
    };
};
console.log(strOrNum(16));
console.log(strOrNum(-16));
console.log(strOrNum(''));
console.log(strOrNum('luka'));


function getArea(shape: any): number {
    if("radius" in shape){
        return Math.PI * shape.radius ** 2;
    }else if("width" in shape && "height" in shape){
        return shape.width * shape.height;
    }else{
        throw new Error("Invalid shape");
    };
};
console.log(getArea({radius: 5}));
console.log(getArea({width: 4, height: 6}));


function combine(some1: string | number, some2: string | number): string | number | undefined {
    if(typeof some1 === 'string' && typeof some2 === 'string'){
        return some1 + some2;
    }else if(typeof some1 === 'number' && typeof some2 === 'number'){
        return some1 + some2;
    }else{
        return undefined;
    };
};
console.log(combine('luka', 'luka'));
console.log(combine(10, 6));


function directions(dir: "up" | "down" | "left" | "right"): string{
    return `Moving ${dir} direction`;
};
console.log(directions('up'));


let role: "admin" | "user" | "guest" = "user";
console.log(`Your role is: ${role}`);


function trafficLight(color: "red" | "yellow" | "green"): string | undefined{
    if(color === 'red'){
        return 'Stop';
    }else if(color === 'yellow'){
        return 'Wait';
    }else if(color === 'green'){
        return 'Go';
    }else{
        return undefined;
    };
};
console.log(trafficLight('red'));


function makeRequest(request: "GET" | "POST" | "PUT" | "DELETE"): string{
    return `Making ${request} request`;
};
console.log(makeRequest('DELETE'));


function rollDice(number: "one" | "two" | "three" | "four" | "five" | "six"){
    return number;
};
console.log(rollDice('five'));


class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    };

    greet(): void{
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
};
new Person("Luka", 16).greet();


class Animal{
    name: string;
    
    constructor(name: string){
        this.name = name;
    };

    makeSound(): void{
        console.log('animal sound');
    };
};
class Dog extends Animal{
    constructor(name: string){
        super(name);
    };

    makeSound(): void{
        console.log(`${this.name} says: Woof!`);
    };
};
class Cat extends Animal{
    constructor(name: string){
        super(name);
    };

    makeSound(): void{
        console.log(`${this.name} says: Meow!`);
    };
};
new Dog("Bobby").makeSound();
new Cat("Mimi").makeSound();


class BankAccount{
    private balance: number;

    constructor(balance: number){
        this.balance = balance;
    };

    deposit(amount: number): void{
        if(amount <= 0){
            console.log("Enter positive number!");
            return;
        };
        this.balance += amount;
        console.log(`Deposit: ${amount}$ | Balance: ${this.balance}$`);
    };

    withdraw(amount: number): void{
        if(amount <= 0){
            console.log("Enter positive number!");
            return;
        }
        if(amount > this.balance){
            console.log("Not enough on your balance!");
            return;
        };
        this.balance -= amount;
        console.log(`Withdraw: ${amount}$ | Balance: ${this.balance}$`);
    };

    getBalance(): void{
        console.log(`Balance: ${this.balance}$`);
    };
};
const account = new BankAccount(100);
account.getBalance();
account.deposit(50);
account.withdraw(30);
account.withdraw(200);
account.getBalance(); 


class MathHelper{
    a: number;
    b: number;

    constructor(a: number, b:number){
        this.a = a;
        this.b = b;
    };

    static add(a, b): void{
        console.log(a + b);
    }

    static substraction(a, b): void{
        console.log(a - b);
    };

    static multiply(a, b): void{
        console.log(a * b);
    };
};
MathHelper.add(2, 4);
MathHelper.substraction(15, 8);
MathHelper.multiply(9, 3);


class User{
    private _password: string;

    constructor(password: string){
        this.password = password;
    };

    set password(value: string){
        if(value.length < 6){
            throw new Error("Password must be 6 symbols long!");
        };
        this._password = value;
    };

    get password(): string{
        return "*".repeat(this._password.length);
    };
};
console.log(new User('Luka0917!').password);