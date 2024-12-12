const h1 = document.querySelector("h1");

let numbers = []
for(let i = 0; i < 10; i++){
    const N = prompt(`Enter number #${i + 1}`);
    numbers.push(N * 2);
}
h1.textContent = numbers;