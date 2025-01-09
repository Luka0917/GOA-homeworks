const yourScoreP = document.getElementById("your-score");
const compScoreP = document.getElementById("comp-score");
const winner = document.getElementById("winner");
const btnDiv = document.getElementById("options");

const compOptions = ["rock", "paper", "scissors"];

let compScore = 0;
let yourScore = 0;

function play(e){
    const btnId = e.target.id;
    const compChoice = compOptions[Math.floor(Math.random) * 3];
    if (btnId === compChoice){
        winner.textContent = "Tie!";
    }
    else if((btnId === "rock" && compChoice === "paper") || (btnId === "paper" && compChoice === "scissors") || (btnId === "scissors" && compChoice === "rock")){
        compScore++;
        winner.textContent = "You lost!";
        compScoreP.textContent = "Computer score: " + compScore;
    }
    else{
        yourScore++;
        winner.textContent = "You won!";
        yourScoreP.textContent = "Your Score: " + yourScore;
    }
}

btnDiv.addEventListener("click", play);