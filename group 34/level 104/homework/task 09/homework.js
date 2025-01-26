let arr = [
    "Hello", 
    {name: "Luka", lastName: "Tatuashvili", age: 16},
    42,
    {name: "Andria", lastName: "Jigarikaci", age: 25},
    "World"
];
  
let [greeting1, {name, lastName, age}, number, {name: name1, lastName: lastName1, age: age1}, greeting2] = arr;
  
console.log(greeting1);
console.log(name);
console.log(lastName);
console.log(age);
console.log(number);
console.log(name1);
console.log(lastName1);
console.log(age1);
console.log(greeting2);