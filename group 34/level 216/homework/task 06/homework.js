const mainDiv = document.getElementById('main');
const message = document.getElementById('message');
const form  = document.querySelector('form');
const input = document.querySelector('input');
const resetBtn = document.getElementById('reset');


let arr = [];
const size = 30;

function createArray(){
    arr = [];
    mainDiv.innerHTML = '';
    for(let i = 0; i < size; i++){
        const num = (i + 1) * 3;
        arr.push(num);
        const div = document.createElement('div');
        div.className = 'box';
        div.textContent = num;
        mainDiv.appendChild(div);
    };
    message.textContent = '';
};
createArray();

function highlight(low, high, mid) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(b => b.className = 'box');
    if(boxes[low]) boxes[low].classList.add('low');
    if(boxes[high]) boxes[high].classList.add('high');
    if(boxes[mid]) boxes[mid].classList.add('mid');
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

function highlightFound(index) {
    const boxes = document.querySelectorAll('.box');
    boxes[index].className = 'box found';
}

async function binarySearch(target){
    let low = 0;
    let high = arr.length - 1;
    let found = false;

    while(low <= high){
        const mid = Math.floor((low + high) / 2);
        highlight(low, high, mid);
        await sleep(1300);

        if(arr[mid] === target){
            highlightFound(mid);
            message.textContent = `Found ${target} at index ${mid}!`;
            found = true;
            break;
        }else if(arr[mid] < target){
            low = mid + 1;
        }else{
            high = mid -1;
        }
    }
    if(!found){
        message.textContent = `Target ${target} not found!`;
    };
};

form.addEventListener('submit', e => {
    e.preventDefault();
    const target = Number(input.value);
    binarySearch(target);
});
resetBtn.addEventListener('click', createArray);