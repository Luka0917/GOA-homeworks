const h1 = document.querySelector("h1");

const numbers = [];
const odd = [];
let m = prompt("Enter number of numbers:");
for(let i = 0; i < m; i++){
    let N = prompt(`Enter number #${i + 1}`);
    numbers.push(N);
    if(i % 2 != 0){
        odd.push(i);
    }
}
h1.textContent = odd;