// 6kyu

// https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript

function findRoutes(routes){
  const map = {};
  const arrivals = new Set();
  for(let [from, to] of routes){
    map[from] = to;
    arrivals.add(to);
  }
  let start = null;
  for(let [from] of routes){
    if(!arrivals.has(from)){
      start = from;
      break;
    }
  }
  const result = [start];
  while(map[start]){
    start = map[start];
    result.push(start);
  }
  return result.join(", ");
}