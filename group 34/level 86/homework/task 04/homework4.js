const h1 = document.querySelector("h1");

let N = prompt("Enter number of numbers:");
N = Number(N);
let numbers = [];
let reversed = [];
for (let i = 0; i < N; i++) {
    let number = prompt("Enter number #" + (i + 1));
    numbers.push(Number(number));
}
for (let i = N - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}
h1.textContent = reversed;