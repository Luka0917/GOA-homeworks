const body = document.querySelector("body");

body.innerHTML = `
    <div id="cart">
        <p><i class="fa-solid fa-cart-shopping"></i> Cart</p>
    </div>
    <div id="count-div">
        <p id="count">0</p>
    </div>
    <div id="main">
        <div id="div-1" class="main-divs">
            <p class="main-p">Shoe 1</p>
            <img src="shoe1.jpg" alt="shoe 1">
            <div class="icons">
                <button class="icon-btn add"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                <button class="icon-btn rem"><i class="fa-solid fa-trash"></i> Remove</button>
            </div>
        </div>

        <div id="div-2" class="main-divs">
            <p class="main-p">Shoe 2</p>
            <img src="shoe2.jpg" alt="shoe 2">
            <div class="icons">
                <button class="icon-btn add"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                <button class="icon-btn rem"><i class="fa-solid fa-trash"></i> Remove</button>
            </div>
        </div>

        <div id="div-3" class="main-divs">
            <p class="main-p">Shoe 3</p>
            <img src="shoe3.jpg" alt="shoe 3">
            <div class="icons">
                <button class="icon-btn add"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                <button class="icon-btn rem"><i class="fa-solid fa-trash"></i> Remove</button>
            </div>
        </div>
    </div>
`

const add = document.getElementsByClassName("add");
const rem = document.getElementsByClassName("rem");
const countP = document.getElementById("count");

let counter = 0;

for(let i = 0; i < 3; i++){
    add[i].addEventListener("click", function(){
        counter++;
        countP.textContent = counter;
    })
    rem[i].addEventListener("click", function(){
        if(counter === 0){
            alert("You can't remove!");
        }
        else{
            counter--;
            countP.textContent = counter;
        }
    })
}