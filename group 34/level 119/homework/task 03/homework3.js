let studentResults = new Map([['Luka', 85], ['Giorgi', 96], ['Nika', 73]]);
let newStudentResults = new Map();

for (let [name, score] of studentResults) {
    newStudentResults.set(name, score+5);
}

console.log(newStudentResults);