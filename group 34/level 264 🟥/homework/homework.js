function countingSort(arr){
    const max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);

    for(let i of arr) count[i]++;

    let result = [];
    for(let x = 0; x < count.length; x++){
        while(count[x] > 0){
            result.push(x);
            count[x]--;
        }
    }
    return result
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));


function countingSort1(arr, maxAge){
    const n = arr.length;
    const result = new Array(n);
    const count = new Array(maxAge + 1).fill(0);

    for(let i = 0; i < n; i++) count[arr[i].age]++;

    for(let x = 1; x <= maxAge; x++) count[x] += count[x-1];

    for(let y = n-1; y >= 0; y--){
        const person = arr[y];
        const age = person.age;
        const position = count[age]-1;

        result[position] = person;
        count[age]--;
    }

    return result;
}

const people = [{ name: 'Kote', age: 10 }, { name: 'Giga', age: 5 }, { name: 'Daviti', age: 3 }, { name: 'Cotne', age: 8 }];
console.log(countingSort1(people, 10));