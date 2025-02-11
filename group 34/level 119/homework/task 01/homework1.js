let studentResults = new Map();

function students(arr){
    for(let i = 0; i < arr.length; i++){
        studentResults.set(arr[i][0], arr[i][1]);
    };
    return studentResults;
};

console.log(students([['Luka', 85], ['Giorgi', 96], ['Nika', 73]]));