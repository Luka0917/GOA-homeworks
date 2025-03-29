import {plus} from './plus.js';
import {minus} from './minus.js';
import {multiply} from './multiply.js';
import {divide} from './divide.js';

const form = document.querySelector('form');
const ans = document.querySelector('h1');
form.addEventListener('submit', e => {
    e.preventDefault();
    const num1 = form.num1.value;
    const num2 = form.num2.value;
    const op = form.category;
    const num1Value = parseInt(num1);
    const num2Value = parseInt(num2);
    if(op.value === 'plus'){
        ans.textContent = `Answer: ${plus(num1Value, num2Value)}`;
    };
    if(op.value === 'minus'){
        ans.textContent = `Answer: ${minus(num1Value, num2Value)}`;
    };
    if(op.value === 'multiply'){
        ans.textContent = `Answer: ${multiply(num1Value, num2Value)}`;
    };
    if(op.value === 'divide'){
        ans.textContent = `Answer: ${divide(num1Value, num2Value)}`;
    };
});