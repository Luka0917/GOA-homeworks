const p1 = document.getElementById("p-1");
const p2 = document.getElementsByClassName("cars");

function myName(){
    p1.textContent = "Luka Tatuashvili";
}

p1.addEventListener("click", myName);

for (let i = 0; i < p2.length; i++){
    p2[i].style.color = "blue";
}