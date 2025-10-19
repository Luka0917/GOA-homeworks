// 7kyu

// https://www.codewars.com/kata/671fd30696d3f42285f7d1f1/train/javascript

function window(length, offset, list){
  const result = [];
  for(let i = 0; i + length <= list.length; i += offset){
    result.push(list.slice(i, i + length));
  };
  return result;
};

// https://www.codewars.com/kata/56cafdabc8cfcc3ad4000a2b/train/javascript

function score(n) {
  if(n === 0) return 0;
  let bit = 1;
  while(bit <= n){
    bit <<= 1;
  };
  return bit - 1;
};

// https://www.codewars.com/kata/589d1e88e8afb7a85e00004e/train/javascript

function numberIncreasing(n){
  const visited = new Set();
  const queue = [1];
  while(queue.length > 0){
    const current = queue.shift();
    if(current === n) return true;
    if(current > n || visited.has(current)) continue;
    visited.add(current);
    queue.push(current * 3);
    queue.push(current + 5);
  };
  return false;
};