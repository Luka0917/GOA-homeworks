const body = document.querySelector('body');
const input = document.querySelector('input');
const h4 = document.querySelector('h4');

const symbols = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

let idS = [];
document.querySelector('button').addEventListener('click', () => {
    let result = "";
    for(let i = 0; i < 12; i++){
        const randomIndex = Math.floor(Math.random() * symbols.length);
        result += symbols[randomIndex];
    };
    idS.push(result);
});

const form = document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    if(idS.length === 0){
        alert("There Is No ID!");
    }else{
        let found = false;
        for(let i = 0; i < idS.length; i++){
            if(input.value === idS[i]){
                h4.textContent = idS[i];
                found = true;
                break;
            }else{
                alert("ID Not Found!");
            };
        };
    };
});