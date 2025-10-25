// 7kyu

// https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/javascript

function head(arr){
  return arr[0];
}

function tail(arr){
  return arr.slice(1);
}

function init(arr){
  return arr.slice(0, -1);
}

function last(arr){
  return arr[arr.length - 1];
}