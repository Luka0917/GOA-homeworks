const body = document.querySelector("body");
const input = document.querySelector("input");

const specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '{', '}', '[', ']', '\\', '|', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`', '¬', '©', '®', '€', '£', '¥', '¢'];

input.addEventListener("input", () => {
    if(input.value.length >= 1 && input.value.length <= 6){
        body.style.backgroundColor = "red";
    }
    else if(input.value.length === 8){
        let haveNum = false;
        let haveUpper = false;
        for(let i = 0; i < input.value.length; i++){
            if(!isNaN(input.value[i])){
                haveNum = true;
            }else if(input.value[i].toUpperCase() == input.value[i]){
                haveUpper = true;
            }
        }
        if(haveNum && haveUpper){
            body.style.backgroundColor = "yellow";
        }
    }
    else if(input.value.length === 10){
        let haveNum = false;
        let haveUpper = false;
        let haveSymbol = false;
        for(let i = 0; i < input.value.length; i++){
            if(!isNaN(input.value[i])){
                haveNum = true;
            }else if(input.value[i].toUpperCase() == input.value[i]){
                haveUpper = true;
            }
            for(let x = 0; x < specialSymbols.length; x++){{
                if(input.value[i] === specialSymbols[x]){
                    haveSymbol = true
                }
            }}
        }
        if(haveNum && haveUpper && haveSymbol){
            body.style.backgroundColor = "green";
        }
    }
    else{
        body.style.backgroundColor = "white";
    }
})

input.addEventListener("input", () => {
})