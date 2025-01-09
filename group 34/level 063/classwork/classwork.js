function filter(numberArr){
    const evenNumbers = []
    for (let i of numberArr){
        if (i % 2 === 0){
            evenNumbers.push(i)
        }
    }
    console.log(evenNumbers)
}

filter([1,2,3,4,5,6,7,8,9]);