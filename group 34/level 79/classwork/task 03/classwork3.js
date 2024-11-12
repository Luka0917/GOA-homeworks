const btn1 = document.getElementById("button-1");
const btn2 = document.getElementById("button-2");
const btn3 = document.getElementById("button-3");

const div1 = document.getElementById("div-1");
const div2 = document.getElementById("div-2");
const div3 = document.getElementById("div-3");

btn1.addEventListener("click", function(){
    div1.style.opacity = "1";
})

btn2.addEventListener("click", function(){
    div2.style.opacity = "1";
})
btn3.addEventListener("click", function(){
    div3.style.opacity = "1";
})