// 8kyu

// https://www.codewars.com/kata/5808e2006b65bff35500008f

function position(letter){
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5

function dutyFree(normPrice, discount, hol){
  const savingsPerBottle = normPrice * (discount / 100);
  return Math.floor(hol / savingsPerBottle);
}

// https://www.codewars.com/kata/56f695399400f5d9ef000af5

function correctTail(body, tail){
  let sub = body.substr(body.length - tail.length);
  return sub === tail;
}