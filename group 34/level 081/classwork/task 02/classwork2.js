const div = document.getElementById("circle");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let px = 0;
    const circleJump = setInterval(function(){
        div.style.bottom = `${px}px`;
        px++;
        if(px === 40){
            clearInterval(circleJump);
            const circleDown = setInterval(function(){
              div.style.bottom = `${px}px`;
              px--;
              if(px === 0){
                clearInterval(circleDown);
              }
            }, 17)
        }
    }, 17)
})