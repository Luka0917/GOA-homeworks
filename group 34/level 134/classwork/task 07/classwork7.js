import {helloWorld} from './function1.js';
import {helloLuka} from './function2.js';
import {helloGoa} from './function3.js';

document.querySelector('h1').textContent = `Function 1: ${helloWorld()}`;
document.querySelector('h2').textContent = `Function 2: ${helloLuka()}`;
document.querySelector('h3').textContent = `Function 3: ${helloGoa()}`;