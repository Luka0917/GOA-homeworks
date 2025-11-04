// 7kyu

// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript

var palindromeChainLength = function(n){
    let steps = 0;
    function isPalindrome(num){
        const str = num.toString();
        return str === str.split('').reverse().join('');
    }
    while(!isPalindrome(n)){
        const reversed = parseInt(n.toString().split('').reverse().join(''), 10);
        n += reversed;
        steps++;
    }
    return steps;
};

// 6kyu

// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

String.prototype.camelCase = function() {
  const words = this.split(" ");
  const result = words.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return result.join("");
};