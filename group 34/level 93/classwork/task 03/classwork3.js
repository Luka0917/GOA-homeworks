const mainDiv = document.getElementById("main-div");
const mainBtn = document.getElementById("main-btn");

mainBtn.addEventListener("click", function(){
    const newDiv = document.createElement("div");
    newDiv.className = "main";
    
    newDiv.innerHTML += `
        <p>0</p>
        <div id="buttons">
            <button id="inc">Increase</button>
            <button id="dec">Decrease</button>
            <button id="res">Reset</button>
        </div>
    `

    mainDiv.appendChild(newDiv);

    const main = document.getElementsByClassName("main");
    const p = document.querySelector("p");
    const inc = document.getElementById("inc");
    const dec = document.getElementById("dec");
    const res = document.getElementById("res");

    let count = 0;
    inc.addEventListener("click", function(){
        count++;
        p.textContent = count;
        if(count > 0){
            main[0].style.backgroundColor = "green";
        }
    })
    dec.addEventListener("click", function(){
        count--;
        p.textContent = count;
        if(count < 0){
            main[0].style.backgroundColor = "red";
        }
    })
    res.addEventListener("click", function(){
        count = 0;
        p.textContent = count;
        if(count === 0){
            main[0].style.backgroundColor = "#81BFDA";
        }
    })
})