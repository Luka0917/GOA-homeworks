// 8kyu

// https://www.codewars.com/kata/5866fc43395d9138a7000006

function ensureQuestion(s) {
  if(s.endsWith("?")){
    return s;
  };
  return s + "?";
};

// https://www.codewars.com/kata/573f5c61e7752709df0005d2

function mergeArrays(a, b){
  let i = 0, j = 0;
  const result = [];

  while(i < a.length && j < b.length){
    if(a[i] < b[j]){
      if(result[result.length - 1] !== a[i]) result.push(a[i]);
      i++;
    }else if(a[i] > b[j]){
      if(result[result.length - 1] !== b[j]) result.push(b[j]);
      j++;
    }else{
      if (result[result.length - 1] !== a[i]) result.push(a[i]);
      i++;
      j++;
    }
  }

  while(i < a.length){
    if(result[result.length - 1] !== a[i]) result.push(a[i]);
    i++;
  }
  while(j < b.length){
    if(result[result.length - 1] !== b[j]) result.push(b[j]);
    j++;
  }
  return result;
}

// https://www.codewars.com/kata/55a996e0e8520afab9000055

function cookie(x){
  let name;
  if(typeof x === "string"){
    name = "Zach";
  }else if (typeof x === "number"){
    name = "Monica";
  }else{
    name = "the dog";
  }
  return `Who ate the last cookie? It was ${name}!`;
}

// https://www.codewars.com/kata/523b4ff7adca849afe000035

function greet(){
  return 'hello world!';
}

// 7kyu

// https://www.codewars.com/kata/5a58d889880385c2f40000aa

function automorphic(n){
  const square = n * n;
  return square.toString().endsWith(n.toString()) ? "Automorphic" : "Not!!";
}

// https://www.codewars.com/kata/57fd696e26b06857eb0011e7

function dative(word){
  const frontVowels = "eéiíöőüű";
  const backVowels = "aáoóuú";
  for(let i = word.length - 1; i >= 0; i--){
    const ch = word[i];
    if(frontVowels.includes(ch)){
      return word + "nek";
    }
    if(backVowels.includes(ch)){
      return word + "nak";
    }
  }
  return word;
}