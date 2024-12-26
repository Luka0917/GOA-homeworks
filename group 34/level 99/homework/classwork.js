// 1
const func = (name = "მაყურებელი") => {return `Hello, ${name}!`;};

// 2
const func1 = (a = 0, b = 5) => {return a + b;};

// 3
const func2 = (num1 = 10, num2 = 20) => {if(num1 > num2){return num1;}return num2;};

// 4
const func3 = (num1 = 1, num2 = 2, num3 = 3) => {return num1 * num2 * num3;};

// 5
const func4 = (price, tax = 5) => {return (price * tax) / 100 + price;};

// 6
const func5 = (text, number = 3) => {result = "";for(let i = 0; i < number; i++){result += text;}return result;};

// 7
const func6 = (num1 = 5, num2 = 10) => {return num1 > num2};

// 8
const func7 = ({name = "Maia", age = 25, city = "Tbilisi" }) => {return `Hello, i am ${name}, ${age} years old and live in ${city}.`};

// 9
const func8 = (start = 1, end = 10, step = 1) => {let result = [];for(let i = start; i < end; i += step){result.push(i);}return result;};

// 10
// ???