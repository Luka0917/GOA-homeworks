const ul = document.querySelector("ul");
const programmingLanguages = ["Python", "JavaScript", "PHP", "GO", "C++", "C#", "C"];
let index = 0;
for (let i = 0; i < programmingLanguages.length; i++){
    const li = document.createElement("li");
    li.textContent = programmingLanguages[index];
    ul.appendChild(li);
    index++
}