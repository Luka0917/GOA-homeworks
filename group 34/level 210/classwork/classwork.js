// 7kyu

// https://www.codewars.com/kata/5a1d91698ba9145199000141/train/javascript

function countTheAnimals(animals){
  return Object.values(animals)
    .map(bin => parseInt(bin, 2))
    .reduce((sum, num) => sum + num, 0);
}

// https://www.codewars.com/kata/59cd0535328801336e000649/train/javascript

function interest(p, r, n){
  let simple = Math.round(p + (p * r * n));
  let compound = Math.round(p * (1 + r) ** n);
  return [simple, compound]
}