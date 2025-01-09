const divs = document.getElementsByClassName("div");

for(let i = 0; i < 5; i++){
    if(i % 2 != 0){
        divs[i].addEventListener("click", function(){
            console.log(divs[i].id)
        })
    }
}