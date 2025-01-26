let people = [
    {name: "Luka", lastName: "Tatuashvili", age: 16},
    {name: "John", lastName: "Doe", age: 25},
    {name: "Alice", lastName: "Smith", age: 30},
    {name: "Bob", lastName: "Brown", age: 17}
];
  
function adults(peopleArr){
    return peopleArr.filter(person => {
        const {age} = person;
        return age >= 18;
    });
};
  
console.log(adults(people));