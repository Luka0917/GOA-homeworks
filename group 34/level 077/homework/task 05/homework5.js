function func(id){
    const myP = document.getElementById(id);
    return myP
}
const myP = func("myP")
myP.style.color = "yellow"
myP.style.fontSize = "20px"
myP.textContent = "hello world"