const payment = document.getElementById("payment");
const tip = document.getElementById("tip");
const form = document.querySelector("form");
const h1 = document.querySelector("h1");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let result = payment.value + ((payment.value * tip) / 100);
    h1.textContent = result;
    console.log(result);
})