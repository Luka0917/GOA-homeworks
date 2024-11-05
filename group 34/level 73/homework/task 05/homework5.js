const p = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    p.textContent = "Text changed!"
})