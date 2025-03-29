const arr = [];
const set = new Set();

console.time('push');
for(let i = 0; i < 1000000; i++){
  arr.push(i);
}
console.timeEnd('push');

console.time('set');
for(let i = 0; i < 1000000; i++){
  set.add(i);
};
console.timeEnd('set');

// push: 46.864ms
// set: 108.487ms