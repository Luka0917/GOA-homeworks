// 7kyu

// https://www.codewars.com/kata/59dc8288fc3c49cc3f000039

function sort(initialArray, sortingArray) {
    let sortedArray = new Array(initialArray.length);
    for (let i = 0; i < sortingArray.length; i++){
      let sortedIndex = sortingArray[i];
      sortedArray[sortedIndex] = initialArray[i];
    }
    return sortedArray;
  }