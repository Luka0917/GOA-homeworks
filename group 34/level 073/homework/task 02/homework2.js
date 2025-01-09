const div = document.getElementById("div");
const myP = document.getElementById("p");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    const divColor = div.style.backgroundColor;
    const pColor = myP.style.color;
    div.style.backgroundColor = pColor;
    myP.style.Color = divColor;
});