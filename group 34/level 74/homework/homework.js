const body = document.querySelector("body");

// .createElement() და .appendChild(node)
let divElement = document.createElement("div");
divElement.style.backgroundColor = "green" // div-ს შევუცვალე background ფერი
body.appendChild(divElement);
let newPElement = document.createElement("p");
newPElement.textContent = "I created P tag inside div tag(which i also created with JavaScript) with JavaScript!!!😮";
divElement.appendChild(newPElement);

let pElement = document.createElement("p");
pElement.textContent = "P added!"
body.appendChild(pElement);

let h1Element = document.createElement("h1");
h1Element.textContent = "H1 added!"
body.appendChild(h1Element);

let imgElement = document.createElement("img");
imgElement.src = "Tbilisi.jpg";
body.appendChild(imgElement);

let buttonElement = document.createElement("button");
buttonElement.textContent = "Button added!"
body.appendChild(buttonElement);

// .insertBefore()
const newP = document.createElement("p");
newP.textContent = "paragraph added before that one ↴";
const parent = document.getElementById("parent");
parent.style.backgroundColor = "purple"; // div-ს შევუცვალე background ფერი
const firstP = parent.querySelector("p");
parent.insertBefore(newP, firstP);

const newButton = document.createElement("button");
newButton.textContent = "new button"
divElement.insertBefore(newButton, newPElement) // divElement-ი პირველი დავალებიდან წამოვიღე სადაც div-ი შევქმენი

const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "darkorange"; // div-ს შევუცვალე background ფერი
body.appendChild(newDiv);
const newButton2 = document.createElement("button");
const newButton3 = document.createElement("button");
newButton2.textContent = "new button 2";
newButton3.textContent = "new button 3"; 
newDiv.appendChild(newButton3)
newDiv.insertBefore(newButton2, newButton3);

const newDiv1 = document.createElement("div");
newDiv1.style.backgroundColor = "blue"; // div-ს შევუცვალე background ფერი
body.appendChild(newDiv1);
const newH2 = document.createElement("h2");
const newH2Second = document.createElement("h2");
newH2.textContent = "new h2 (1)";
newH2Second.textContent = "new h2 (2)"; 
newDiv1.appendChild(newH2);
newDiv1.insertBefore(newH2Second, newH2);

const newDiv2 = document.createElement("div");
newDiv2.style.backgroundColor = "yellow"; // div-ს შევუცვალე background ფერი
body.appendChild(newDiv2);
const input1 = document.createElement("input");
const input2 = document.createElement("input");
input1.type = "text";
input1.placeholder = "Enter your name(1)";
input2.type = "email";
input2.placeholder = "Enter your email(2)";
newDiv2.appendChild(input1);
newDiv2.insertBefore(input2, input1);

// .removeChild(node)
const newh3 = document.createElement("h3");
newh3.textContent = "Added h3!";
body.appendChild(newh3);
body.removeChild(newh3);

const newh4 = document.createElement("h4");
newh4.textContent = "Added h4!";
body.appendChild(newh4);
body.removeChild(newh4);

const newh5 = document.createElement("h5");
newh5.textContent = "Added h5!";
body.appendChild(newh5);
body.removeChild(newh5);

const newh6 = document.createElement("h6");
newh6.textContent = "Added h6!";
body.appendChild(newh6);
body.removeChild(newh6);

// .parentNode
console.log(newPElement.parentNode); // newPElement-ი პირველი დავალებიდან წამოვიღე სადაც div-ში შევქმენი p თეგი

console.log(imgElement.parentNode); // imgElement-ი ".createElement() და .appendChild(node)"-ის მეოთხე დავალებიდან წამოვიღე

console.log(pElement.parentNode); // pElement-ი ".createElement() და .appendChild(node)"-ის მეორე დავალებიდან წამოვიღე

console.log(input2.parentNode); // input2-ი ".insertBefore()"-ის ბოლო დავალებიდან წამოვიღე

const btn = document.createElement("button");
btn.textContent = "button";
body.appendChild(btn);
console.log(btn.parentNode);

// .replaceChild
const replaceP = document.createElement("p");
replaceP.textContent = "replace p";
body.appendChild(replaceP);
const replaceH1 = document.createElement("h1");
replaceH1.textContent = "p replaced by h1";
body.replaceChild(replaceH1, replaceP);

const replaceH2 = document.createElement("h2");
replaceH2.textContent = "replace h2";
body.appendChild(replaceH2);
const replaceH2Second = document.createElement("h2");
replaceH2Second.textContent = "h2 replaced";
body.replaceChild(replaceH2Second, replaceH2);

const replaceH3 = document.createElement("h3");
replaceH3.textContent = "replace h3";
body.appendChild(replaceH3);
const replaceH3Second = document.createElement("h3");
replaceH3Second.textContent = "h3 replaced";
body.replaceChild(replaceH3Second, replaceH3);

const replaceH4 = document.createElement("h4");
replaceH4.textContent = "replace h4";
body.appendChild(replaceH4);
const replaceH4Second = document.createElement("h4");
replaceH4Second.textContent = "h4 replaced";
body.replaceChild(replaceH4Second, replaceH4);

const replaceH5 = document.createElement("h5");
replaceH5.textContent = "replace h5";
body.appendChild(replaceH5);
const replaceH5Second = document.createElement("h5");
replaceH5Second.textContent = "h5 replaced";
body.replaceChild(replaceH5Second, replaceH5);