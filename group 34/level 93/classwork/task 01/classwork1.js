const main = document.getElementById("main");
const p = document.querySelector("p");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("res");

let count = 0;
inc.addEventListener("click", function(){
    count++;
    p.textContent = count;
    if(count > 0){
        main.style.backgroundColor = "green";
    }
})
dec.addEventListener("click", function(){
    count--;
    p.textContent = count;
    if(count < 0){
        main.style.backgroundColor = "red";
    }
})
res.addEventListener("click", function(){
    count = 0;
    p.textContent = count;
    if(count === 0){
        main.style.backgroundColor = "#81BFDA";
    }
})