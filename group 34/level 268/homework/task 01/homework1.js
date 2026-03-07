//* O(n * k)
function radixSort(arr){
    if(arr.length === 0) return arr;

    function getDigit(num, place){
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    }

    function digitCount(num){
        if(num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    }

    function mostDigits(arr){
        let max = 0;
        for(let i of arr){
            max = Math.max(max, digitCount(i));
        }
        return max;
    }

    const maxDigitCount = mostDigits(arr);

    for(let k = 0; k < maxDigitCount; k++){
        let buckets = Array.from({ length: 10 }, () => []);
        for(let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i], k);
            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }

    return arr;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));