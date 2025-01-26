let people = [
    {name: "Luka", lastName: "Tatuashvili", age: 16},
    {name: "Giorgi", lastName: "Davitashvili", age: 28},
    {name: "Mariam", lastName: "Todadze", age: 34}
];
  
for(let { name, lastName, age } of people){
    console.log(`${name} ${lastName} is ${age} years old.`);
};