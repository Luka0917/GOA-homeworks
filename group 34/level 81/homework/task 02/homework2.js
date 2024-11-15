const div = document.querySelector("div");
const btn = document.querySelector("button");

let px = 889;
btn.addEventListener("click", function(){
    const moveCubeLeft = setInterval(function(){
        div.style.opacity = "1";
        div.style.transform = `translate(${px}px)`;
        px--;
        if(px === 0){
            clearInterval(moveCubeLeft);
        }
    }, 1)
})