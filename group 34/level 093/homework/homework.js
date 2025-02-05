const coockie = document.getElementById("coockie-img");
const coockieP = document.getElementById("coockie");
const goldP = document.getElementById("gold");

// gadgets
const biggerFinger = document.getElementById("bigger-finger");
const betterMines = document.getElementById("better-mines");
const doubleCoockies = document.getElementById("double-coockies");

// price
const biggerFingerB = document.getElementById("bigger-finger-b");
const betterMinesB = document.getElementById("better-mines-b");
const doubleCoockiesB = document.getElementById("double-coockies-b");

// coockies and coockies to add
let coockieToAdd = 1;
let goldToAdd = 1;
// coockies and gold
let coockies = 0;
let gold = 0;
// prices
let biggerFingerPrice = 50;
let betterMinesPrice = 100;
let doubleCoockiesPrice = 200;

biggerFinger.disabled = true;
betterMines.disabled = true;
doubleCoockies.disabled = true;

function coockiesAdd(coockieAdded, goldAdded){
    coockies += coockieAdded;
    gold += goldAdded;
    coockieP.textContent = `Coockies: ${coockies}`;
    goldP.textContent = `Gold: ${gold}`;

    if(gold >= 50){biggerFinger.disabled = false;};
    if(coockies >= 100){betterMines.disabled = false;};
    if(gold >= 200){doubleCoockies.disabled = false;};
}

coockie.addEventListener("click", () => coockiesAdd(coockieToAdd, goldToAdd))

biggerFinger.addEventListener("click", () => {
    if(gold >= biggerFingerPrice){
        coockieToAdd++;
        goldP.textContent = `Gold: ${gold -= biggerFingerPrice}`;
        biggerFingerB.textContent = `${biggerFingerPrice *= 2}$`;
    };
});
betterMines.addEventListener("click", () => {
    if(coockies >= betterMinesPrice){
        goldToAdd++;
        coockieP.textContent = `Coockies: ${coockies -= betterMinesPrice}`;
        betterMinesB.textContent = `${betterMinesPrice *= 2} Coockies`
    };
});doubleCoockies.addEventListener("click", () => {
    if(gold >= doubleCoockiesPrice){
        coockieToAdd += 2;
        goldP.textContent = `Gold: ${gold -= doubleCoockiesPrice}`;
        doubleCoockiesB.textContent = `${doubleCoockiesPrice *= 2}$`;
    };
});