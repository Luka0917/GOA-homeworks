const div = document.querySelector("div");
const btn = document.querySelector("button");

let deg = 0;
btn.addEventListener("click", function(){
    const rotateCube = setInterval(function(){
        div.style.transform = `rotate(${deg}deg)`;
        deg++;
        if(deg === 45){
            clearInterval(rotateCube);
        }
    }, 20)
})