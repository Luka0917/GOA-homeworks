// 8 kyu

// 1
// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

function booleanToString(b){
  return String(b);
}

// 2
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
  const numStr = String(n);
  const digitsArray = [];
  for (let i = 0; i < numStr.length; i++){
    digitsArray.push(Number(numStr[i]));
  }
  const reversedArray = [];
  for (let i = digitsArray.length - 1; i >= 0; i--){
    reversedArray.push(digitsArray[i]);
  }
  return reversedArray;
}

// 3
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade (s1, s2, s3) {
  const averageScore = (s1 + s2 + s3) / 3;
  if (averageScore >= 90 && averageScore <= 100){
    return "A";
  }
  else if (averageScore >= 80 && averageScore < 90){
    return "B";
  }
  else if (averageScore >= 70 && averageScore < 80){
    return "C";
  }
  else if (averageScore >= 60 && averageScore < 70){
    return "D";
  }
  else {
    return "F";
  }
}

// 4
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

const areaOrPerimeter = function(l , w) {
  if (l === w){
    return l * w;
  }
  else{
    return 2 * (l + w);
  }
}


// 7 kyu

// 1
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function dnaStrand(dna){
  let result = "";
  for (let i = 0; i < dna.length; i++){
    if (dna[i] === "A"){
      result += "T";
    }
    else if (dna[i] === "T"){
      result += "A";
    }
    else if (dna[i] === "C"){
      result += "G";
    }
    else{
      result += "C";
    }
  }
  return result;
}

// 2
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  const words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++){
    const reversedWord = words[i].split('').reverse().join('');
    result += reversedWord;
    if (i < words.length - 1){
      result += " ";
    }
  }
  return result;
}

// 3
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
  let numStr = num.toString();
  let result = "";
  for (let i = 0; i < numStr.length; i++) {
    let digit = Number(numStr[i]);
    result += (digit * digit).toString();
  }
  return +result;
}

// 4
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

String.prototype.toJadenCase = function () {
  const words = this.split(" ");
  const result = [];
  for (let i of words){
    result.push(i.charAt(0).toUpperCase() + i.slice(1));
  }
  return result.join(" ");
}