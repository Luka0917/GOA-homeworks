class Name{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    };
    get initials(){
        return `Initials: ${this.firstName[0].toUpperCase()}.${this.lastName[0].toUpperCase()}`;
    };
};

console.log(new Name("luka", "tatuashvili").initials);

class AgeToMonth{
    constructor(age){
        this.age = age;
    };
    get month(){
        return `Month: ${this.age * 12}`;
    };
};

console.log(new AgeToMonth(16).month);

class Retired{
    constructor(age){
        this.age = age;
    };
    get retired(){
        return `Retired: ${this.age >= 60}`;
    };
};

console.log(new Retired(80).retired);

class FormattedPrice{
    constructor(price){
        this.price = price;
    };
    get formattedPrice(){
        return `Formatted Price: $${this.price.toFixed(2)}`;
    };
};

console.log(new FormattedPrice(100).formattedPrice);

class DiscountPrice{
    constructor(price, discount){
        this.price = price;
        this.discount = discount;
    };
    get discountedPrice(){
        return `Discounted Price: $${this.price - (this.price * this.discount) / 100}`;
    };
};

console.log(new DiscountPrice(100, 20).discountedPrice);