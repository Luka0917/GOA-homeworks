const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

let px = 0;
btn.addEventListener("click", function(){
    const fadeOut = setInterval(function(){
        h1.style.opacity = px;
        px += 0.1;
    }, 150)
})