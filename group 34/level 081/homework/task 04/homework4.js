const p = document.querySelector("p");
const btn = document.querySelector("button");

let px = 18;
btn.addEventListener("click", function(){
    const textBig = setInterval(function(){
        p.style.fontSize = `${px}px`;
        px++;
        if(px === 30){
            clearInterval(textBig);
            const textSmall = setInterval(function(){
                p.style.fontSize = `${px}px`;
                px--;
                if(px === 18){
                    clearInterval(textSmall);
                }
            }, 100)
        }
    }, 100)
})