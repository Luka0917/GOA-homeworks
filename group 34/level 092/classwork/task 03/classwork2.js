const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("input", function(){
    for(let i of input.value){
        if(i >= 0 && i <= 9){
            p.textContent = "Dont use numbers!";
        }
        else{
            p.textContent = "";
        }
    }
})