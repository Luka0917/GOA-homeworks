const words = ['luka', 'aba', 'eve', 'saba', 'giorgi'];
let palindromes = words.filter(el => el === el.split('').reverse().join(''));
console.log(palindromes);