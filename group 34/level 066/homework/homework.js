// Easy
    // Num 1:
    function oddEven(num){
        if (num % 2 === 0){
            console.log("Number is even!");
        }
        else{
            console.log("Number id Odd!");
        }
    }

    // Num 2:
    function arr(numArr){
        if (numArr.length === 0){
            console.log("Array is empty");
        }
        else{
            let sum = 0;
            for (let i = 0; i < numArr.length; i++) {
                sum += numArr[i];
            }
            console.log(sum);
        }
    }

    // Num 3:
    function filterAndMultiply(numbers){
        if (numbers.length === 0){
            console.log("Array is empty");
        }
        else{
            const multipliedResults = [];
            for (let i = 0; i < numbers.length; i++){
                const num = numbers[i];
                const multiplied = num * 3;
                if (multiplied > 20){
                    multipliedResults.push(multiplied);
                }
            }
            console.log(multipliedResults);
        }
    }

// Medium
    // Num 4:
    function findMaxNumber(maxNumberArr) {
        if (numbers.length === 0) {
            console.log("Array is empty");
        }
        else{
            let maxNumber = maxNumberArr[0];
            for (let i = 1; i < maxNumberArr.length; i++) {
                const num = maxNumberArr[i];
                if (num > maxNumber) {
                    maxNumber = num;
                }
            
            }
            console.log(maxNumber);
        }
    }

    // Num 5:
    function isGreaterThan100(num1, num2){
        const result = num1 * num2;
        if (result > 100){
            console.log("Number is greater than 100!");
        }
        else{
            console.log("Number is less than 100!");
        }
    }

// Chad
    // Num 6:
    function firstAndLast(char){
        if (char.length === 0){
            console.log("There is no text!");
        }
        else{
            const firstChar = char[0];
            const lastChar = char[char.length -1];
            console.log(firstChar === lastChar);
        }
    }

    // Num 7:
    function characterFrequency(text){
        const frequency = [];
        for (let char of text){
            if (frequency[char]){
                frequency[char]++;
            }
            else{
                frequency[char] = 1;
            }
        }
        console.log(frequency);
    }