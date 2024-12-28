const coockie = document.getElementById("coockie");
const pointsP = document.getElementById("points");
const goldP = document.getElementById("gold");

// gadgets
const biggerFinger = document.getElementById("bigger-finger");
const betterMines = document.getElementById("better-mines");
const doubleCoockies = document.getElementById("double-coockies");

let points = 0;
let gold = 0;

coockie.addEventListener("click", () => {
    points++;
    gold++;
    pointsP.textContent = `Coockies: ${points}`;
    goldP.textContent = `Gold: ${gold}`;
})

// biggerFinger.disabled = true;