const body = document.querySelector('body');
const input = document.getElementById('name');

document.getElementById('form-1').addEventListener('input', e => {
    e.preventDefault();
    localStorage.setItem("name", input.value);
});

if(localStorage.getItem("name")){
    body.style.backgroundColor = localStorage.getItem("color");
    document.querySelector('body').innerHTML = `
        <div id="main">
            <h2>Welcome ${localStorage.getItem("name")}</h2>
            <h3>Guess Number (0-10)</h3>
            <h4>Points: 0</h4>
            <form id="form-2">
                <label for="color">Enter Color</label>
                <input type="color" id="color">
            </form>
            <form id="form-3">
                <label for="number">Guess Number</label>
                <input type="number" id="number">
                <button>Submit</button>
            </form>
        </div>
    `;
};

const color = document.getElementById('color');
const number = document.getElementById('number');

color.addEventListener('input', e => {
    e.preventDefault();
    localStorage.setItem("color", color.value);
    body.style.backgroundColor = color.value;
});

let randomNumber = Math.floor(Math.random() * 11);
let points = 0;
let hasAlerted = false;
console.log(randomNumber); // not needed

document.getElementById('form-3').addEventListener('submit', e => {
    e.preventDefault();
    
    if(parseInt(number.value) === randomNumber){
        points++;
        document.querySelector('h4').textContent = `Points: ${points}`;
        number.style.backgroundColor = "white";
        number.style.color = "black";
    }else{
        number.style.backgroundColor = "red";
        number.style.color = "white";
    }

    if(points >= 10 && !hasAlerted){
        alert("let's Make It Harder! Now Guess The Number Between 0-20");
        randomNumber = Math.floor(Math.random() * 21);
        document.querySelector('h3').textContent = `Guess Number (0-20)`;
        hasAlerted = true;
    }else{
        randomNumber = Math.floor(Math.random() * 11);
    }

    console.log(randomNumber); // not needed
    
    number.value = '';
});

// localStorage.clear();