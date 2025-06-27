// 6kyu

// https://www.codewars.com/kata/629e18298f2d21006516e381

// permuts : Number => BigInt
function permuts(n){
  if(n === 0) return 1n;
  if(n === 1) return 1n;

  let a = 1n;
  let b = 1n;
  for(let i = 2; i <= n; i++){
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// 7kyu

// https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055

function findArray(arr1, arr2){
  if(!arr1.length || !arr2.length) return [];

  return arr2
    .filter(i => i >= 0 && i < arr1.length)
    .map(i => arr1[i]);
}

// 6kyu

// https://www.codewars.com/kata/5970fce80ed776b94000008b

function lettersToNumbers(s){
  let total = 0;
  for(let char of s){
    if(char >= 'a' && char <= 'z'){
      total += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }else if (char >= 'A' && char <= 'Z'){
      total += 2 * (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
    }else if (char >= '0' && char <= '9'){
      total += char.charCodeAt(0) - '0'.charCodeAt(0);
    }
  }
  return total;
}

// https://www.codewars.com/kata/5938f5b606c3033f4700015a

function alphabetWar(fight){
  const leftPower = { w: 4, p: 3, b: 2, s: 1 };
  const rightPower = { m: 4, q: 3, d: 2, z: 1 };
  
  const chars = fight.split('');
  const destroyed = new Array(chars.length).fill(false);

  for(let i = 0; i < chars.length; i++){
    if(chars[i] === '*'){
      destroyed[i] = true;
      if(i > 0) destroyed[i - 1] = true;
      if(i < chars.length - 1) destroyed[i + 1] = true;
    }
  }
  
  let leftSum = 0;
  let rightSum = 0;

  for(let i = 0; i < chars.length; i++){
    if(!destroyed[i]){
      const ch = chars[i];
      if (leftPower[ch]) leftSum += leftPower[ch];
      else if (rightPower[ch]) rightSum += rightPower[ch];
    }
  }
  if(leftSum > rightSum) return "Left side wins!";
  if(rightSum > leftSum) return "Right side wins!";
  return "Let's fight again!";
}

// 7kyu

// https://www.codewars.com/kata/62f96f01d67d0a0014f365cf

function ballTest(s, r){
  let position = 0;
  let speed = s;
  const n = r.length;
  while(position < n && speed > 0){
    let nextPos = position + speed;
    if(nextPos > n) nextPos = n;
    let cracks = 0;
    for(let i = position; i < nextPos; i++){
      if(r[i] === 'x') cracks++;
    }
    speed = speed - 1 - cracks;
    position = nextPos;
  }
  return position >= n;
}