// 7kyu

// https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript

const prevMultOfThree = n => {
  while(n > 0){
    if(n % 3 === 0) return n;
    n = Math.floor(n / 10);
  }
  return null;
};

// https://www.codewars.com/kata/56b18992240660a97c00000a/train/javascript

function permutationAverage(n){
  const digits = String(n).split('').map(Number);
  const k = digits.length;
  const avgDigit = digits.reduce((a, b) => a + b, 0) / k;
  const ones = Number('1'.repeat(k));
  return Math.round(avgDigit * ones);
};

// https://www.codewars.com/kata/57157a7c2ad76331360002d0/train/javascript

Object.defineProperty(Array.prototype, 'ofType', {
  value: function ofType(type){
    return this.filter(item => {
      switch(type){
        case Number: return typeof item === 'number' || item instanceof Number;
        case String: return typeof item === 'string' || item instanceof String;
        case Boolean: return typeof item === 'boolean' || item instanceof Boolean;
        case Symbol: return typeof item === 'symbol' || item instanceof Symbol;
        case BigInt: return typeof item === 'bigint' || item instanceof BigInt;
      }
      return item instanceof type;
    });
  }
});