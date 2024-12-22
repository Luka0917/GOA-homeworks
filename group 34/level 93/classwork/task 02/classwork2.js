const main = document.getElementById("main");
const p = document.querySelector("p");
const input = document.querySelector("input");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("res");

let count = 0;
input.addEventListener("input", function(){
    if(input.value > 100){
        alert("you can not add number over 100!")
    }
})
inc.addEventListener("click", function(){
    count += input.value;
    p.textContent = count;
})
dec.addEventListener("click", function(){
    count -= input.value;
    p.textContent = count;
})
res.addEventListener("click", function(){
    if(p === 0){
        alert("you can not reset!")
    }
    count = 0;
    p.textContent = count;
})