const h1 = document.querySelector("h1");

const N = prompt("Enter number of numbers:");
let numbers = [];
for(let i = 0; i < N; i++){
    const num = prompt(`Enter number #${i + 1}`);
    numbers.push(num);
}
let first = numbers[0];
numbers[0] = numbers[N - 1];
numbers[N - 1] = first;

h1.textContent = numbers;