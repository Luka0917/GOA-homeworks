const coockie = document.getElementById("coockie");
const pointsP = document.getElementById("points");
const goldP = document.getElementById("gold");

// gadgets
const biggerFinger = document.getElementById("bigger-finger");
const betterMines = document.getElementById("better-mines");
const doubleCoockies = document.getElementById("double-coockies");

const biggerFingerB = document.getElementById("bigger-finger-b");

let points = 0;
let gold = 0;
let biggerFingerPrice = 50;

biggerFinger.disabled = true;
betterMines.disabled = true;
doubleCoockies.disabled = true;

coockie.addEventListener("click", () => {
    points++;
    gold++;
    pointsP.textContent = `Coockies: ${points}`;
    goldP.textContent = `Gold: ${gold}`;

    if(gold >= 50){biggerFinger.disabled = false;};
    if(points >= 100){betterMines.disabled = false;};
    if(gold >= 200){doubleCoockies.disabled = false;};
})