const div = document.querySelector("div");
const btn = document.querySelector("button");

let px = 0;
btn.addEventListener("click", function(){
    const moveCubeRight = setInterval(function(){
        div.style.transform = `translate(${px}px)`;
        px++;
        if(px === 500){
            clearInterval(moveCubeRight);
            const moveCubeLeft = setInterval(function(){
                div.style.transform = `translate(${px}px)`;
                px--;
                if(px === 0){
                    clearInterval(moveCubeLeft)
                }
            })
        }
    })
})