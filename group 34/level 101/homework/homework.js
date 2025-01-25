const body = document.querySelector('body');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const age = document.getElementById('age');
const id = document.getElementById('id');
const height = document.getElementById('height');
const description = document.getElementById('description');
const email = document.getElementById('email');
const ul = document.querySelector('ul');

const elements = ['first name', 'last name', 'age', 'id', 'height', 'description', 'email'];
const userInput = [];

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    userInput.push(firstName.value);
    userInput.push(lastName.value);
    userInput.push(age.value);
    userInput.push(id.value);
    userInput.push(height.value);
    userInput.push(description.value);
    userInput.push(email.value);
    console.log(userInput);
    for(let i = 0; i < 7; i++){
        localStorage.setItem(elements[i], userInput[i]);
    };
});

window.addEventListener('load', () => {
    for(let i = 0; i < 7; i++){
        ul.innerHTML += `
            <li>${elements[i]}: ${localStorage.getItem(elements[i])}</li>
        `;
    };
});