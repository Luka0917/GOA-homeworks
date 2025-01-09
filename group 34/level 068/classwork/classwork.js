// 8 Kyu JavaScript

// 1
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
    if (array.length == 0) {
      return 0
    }
    else{
      const sum = array.reduce((partialSum, a) => partialSum + a, 0);
      return sum / array.length;
    }
}

// 2
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

function smash (words) {
    return words.join(" ");
};

// 3
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
    let text = name.split(" ");
    let firstName = text[0];
    let lastName = text[1];
    let initials = [];
    initials.push(firstName[0].toUpperCase());
    initials.push(lastName[0].toUpperCase());
    let result = initials.join(".");
    return result;
};

// 4
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
    let rna = "";
    for (let i of dna){
      if (i != "T"){
        rna = rna + i;
      }
      else{
        rna = rna + "U";
      }
    }
    return rna;
}

// 5
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let i of str){
    if (vowels.includes(i)){
      count++;
    }
  }
  return count;
};