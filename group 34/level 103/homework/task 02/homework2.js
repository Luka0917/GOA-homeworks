const body = document.querySelector('body');
const choice = document.getElementsByClassName('choice');
const you = document.getElementById('you');
const comp = document.getElementById('comp');
const winnerP = document.getElementById('win');
const stat = document.getElementById('stat');
const clear = document.getElementById('clear');
const mainMain = document.getElementById('main-main');

let count = parseInt(localStorage.getItem('game-count')) || 1;

window.addEventListener('load', () => {
    if(localStorage.getItem('game-count') !== null){
        stat.disabled = false;
    }else{stat.disabled = true;};

    if(localStorage.length === 0){
        clear.disabled = true;
    }else{clear.disabled = false;};
});

let choices = ["Rock", "Paper", "Scissors"];

for(let i = 0; i < choices.length; i++){
    choice[i].addEventListener('click', () => {
        let result = [];
        let randomNumber = Math.floor(Math.random() * 3);
        let playerChoice = choices[i];
        let compChoice = choices[randomNumber];

        you.textContent = `You: ${playerChoice}`;
        comp.textContent = `Comp: ${compChoice}`;
        
        if(playerChoice == compChoice){
            winnerP.textContent = `Winner: It's a Tie!`;
            winnerP.style.backgroundColor = 'yellow';
        }else if(
            (playerChoice === "Rock" && compChoice === "Scissors") ||
            (playerChoice === "Scissors" && compChoice === "Paper") ||
            (playerChoice === "Paper" && compChoice === "Rock")){
                winnerP.textContent = `Winner: You Win!`;
                winnerP.style.backgroundColor = 'green';
        }else{
            winnerP.textContent = `Winner: Comp Win!`;
            winnerP.style.backgroundColor = 'red';
        };

        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        result.push(winnerP.textContent);
        result.push(`${day}.${month}.${year} ${hours}:${minutes}:${seconds}`);

        localStorage.setItem(`game-count`, count);
        localStorage.setItem(`game-${count}`, JSON.stringify(result));
    
        count++;

        if(localStorage.getItem('game-count') !== null){
            stat.disabled = false;
        }else{
            stat.disabled = true;
        }; 

        if(localStorage.length === 0){
            clear.disabled = true;
        }else{
            clear.disabled = false;
        };
    });
};

clear.addEventListener('click', () => {
    localStorage.clear();
    console.clear();
    count = 1;
    clear.disabled = true;
    stat.disabled = true;
    you.textContent = 'You:';
    comp.textContent = 'Comp:';
    winnerP.textContent = 'Winner:';
    winnerP.style.backgroundColor = '#fff';
});