const h1 = document.querySelector("h1");

const numbers = [];
const twoAndFour = [];
for(let i = 0; i < 5; i++){
    let N = prompt(`Enter number #${i + 1}`);
    numbers.push(N);
}
twoAndFour.push(numbers[2]);
twoAndFour.push(numbers[4]);
h1.textContent = twoAndFour;