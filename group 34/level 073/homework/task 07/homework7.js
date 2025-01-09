const userName = document.getElementById("userName");
const btn = document.getElementById("btn");
const myP = document.getElementById("myP");

btn.addEventListener("click", function(e){
    e.preventDefault();
    myP.textContent = userName.value;
})