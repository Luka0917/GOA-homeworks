const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("input", function(){
    p.textContent = input.value.length
})