let arr = ["Luka", "Tatuashvili", 16, "Georgia"];

let [firstName, lastName, ...otherInfo] = arr;

console.log(firstName);
console.log(lastName);
console.log(otherInfo);