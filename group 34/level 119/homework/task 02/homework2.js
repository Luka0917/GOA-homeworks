function removeDuplicates(arr) {
    const mySet = new Set();
    for(let i = 0; i < arr.length; i++){
        mySet.add(arr[i]);
    };
    return mySet;
};

console.log(removeDuplicates([1, 2, 3, 4, 2, 3, 5]));
console.log(removeDuplicates(['luka', 'gio', 'nika', 'luka']));