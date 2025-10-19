// 7kyu

// https://www.codewars.com/kata/57882daf90b2f375280000ad/train/javascript

function SumSquares(l){
  let sum = 0;
  for(let item of l){
    if(Array.isArray(item)){
      sum += SumSquares(item);
    }else{
      sum += item * item;
    };
  };
  return sum;
};

// https://www.codewars.com/kata/57f609022f4d534f05000024/train/python

function stray(numbers) {
  if(numbers[0] != numbers[1]){
    if(numbers[0] == numbers[2]){
      return numbers[1];
    }else{
      return numbers[0];
    };
  }else{
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] != numbers[0]){
        return numbers[i];
      };
    };
  };
};