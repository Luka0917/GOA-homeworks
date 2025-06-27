// 8kyu

// https://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s){
  s = s.trim();
  let result = '';
  for(let i = 1; i < 6; i++){
    result += `${s.repeat(i)}\n`;
  };
  return result.trim();
}

// https://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr){
  let array = [].concat(...arr);
  array.sort((a, b) => b - a);
  return array.join('>');
}

// https://www.codewars.com/kata/5732d3c9791aafb0e4001236

function roundIt(n){
  const parts = n.toString().split(".");
  const leftDigits = parts[0].length;
  const rightDigits = parts[1].length;

  if(leftDigits < rightDigits){
    return Math.ceil(n);
  }else if (leftDigits > rightDigits){
    return Math.floor(n);
  }else{
    return Math.round(n);
  }
}