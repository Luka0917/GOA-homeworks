function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j + 1]){
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            } 
        }
    }
}

let bubbleSortNums = [5, 3, 8, 1, 4, 2];
bubbleSort(bubbleSortNums);
console.log(`Bubble Sort: ${bubbleSortNums}`);


function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && key < arr[j]){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

let insertionSortNums = [99, 23, 55, 67, 2, 9];
insertionSort(insertionSortNums);
console.log(`Insertion Sort: ${insertionSortNums}`);

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

let selectionSortNums = [34, 12, 2, 6, 7, 9, 5];
selectionSort(selectionSortNums)
console.log(`Selection Sort: ${selectionSortNums}`);

function countingSort(arr, maxValue = null){
  if (arr.length === 0) return arr;

  if(maxValue === null){
    maxValue = Math.max(...arr);
  }
  const count = new Array(maxValue + 1).fill(0);
  for(let num of arr){
    if(num < 0) throw new Error("Counting sort only works with non-negative integers.");
    count[num]++;
  }
  let index = 0;
  for(let i = 0; i <= maxValue; i++){
    while(count[i] > 0){
        arr[index] = i;
        index++;
        count[i]--;
    }
  }
  return arr;
}

let countingSortNums = [5, 8, 2, 3, 67, 29];
countingSort(countingSortNums);
console.log(`Counting Sort: ${countingSortNums}`);


function isSorted(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

function shuffle(arr){
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function bogoSort(arr){
    let attempts = 0;
    while(!isSorted(arr)){
        shuffle(arr);
        attempts++;
    }
    console.log(`\nSorted after ${attempts} shuffles`);
    return arr;
}

let bogoSortNums = [3, 2, 5, 1, 4];
console.log(`Bogo Sort: ${bogoSort(bogoSortNums)}`);