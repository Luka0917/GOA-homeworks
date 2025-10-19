// 6kyu

// https://www.codewars.com/kata/534a0c100d03ad9772000539/train/javascript

function PrimeFactorizer(n){
  this.factor = {};
  let divisor = 2;
  while(n > 1){
    let count = 0;
    while (n % divisor === 0){
      count++;
      n /= divisor;
    }
    if(count > 0){
      this.factor[divisor.toString()] = count;
    }
    divisor++;
  }
}