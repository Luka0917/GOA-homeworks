const myP = document.getElementsByClassName("myP");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    for (let i = 0; i < myP.length; i++){
        myP[i].style.fontSize = "30px";
        myP[i].style.fontWeight = "900";
    }
})