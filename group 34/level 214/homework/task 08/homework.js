const input = document.querySelector('input');
const form = document.querySelector('form');
const mainDiv = document.getElementById('main');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let divObjects = [];
let intervalId = null;
let n = 0;

function isSorted(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if (arr[i].height > arr[i + 1].height) return false;
    };
    return true;
};

function renderDivs(){
    mainDiv.innerHTML = '';
    divObjects.forEach(obj => {
        const div = document.createElement('div');
        div.className = 'divs';
        div.style.height = `${obj.height}px`;
        div.textContent = obj.index;
        mainDiv.appendChild(div);
    });
};

function shuffleArray(arr){
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
};

form.addEventListener('submit', e => {
    e.preventDefault();
    mainDiv.innerHTML = '';
    n = Number(input.value);

    let divs = Array.from({ length: n }, (_, i) => i);

    const minHeight = 100;
    const maxHeight = 200;
    const step = (maxHeight - minHeight) / (n - 1 || 1);

    divObjects = divs.map(i => {
        return {
            index: i,
            height: Math.floor(minHeight + i * step)
        };
    });

    shuffleArray(divObjects);
    renderDivs();
});

function bogoStep(){
    if(!isSorted(divObjects)){
        shuffleArray(divObjects);
        renderDivs();
    }else{
        clearInterval(intervalId);
        intervalId = null;
        alert('Sorted! 🎉');
    };
};

startBtn.addEventListener('click', () => {
    if(intervalId) return;
    intervalId = setInterval(bogoStep, Math.floor(Math.random() * 100) + 1);
});

pauseBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    if(!divObjects.length) return;

    const minHeight = 100;
    const maxHeight = 200;
    const step = (maxHeight - minHeight) / (n - 1 || 1);

    divObjects.forEach((obj, i) => {
        obj.height = Math.floor(minHeight + i * step);
    });

    shuffleArray(divObjects);
    renderDivs();
});