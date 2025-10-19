// 8kyu

// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
};

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  if (array.length == 0) {
    return 0
  }
  else{
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    return sum / array.length;
  }
}

// 7kyu

// https://www.codewars.com/kata/671fd30696d3f42285f7d1f1/train/javascript

function window(length, offset, list){
  const result = [];
  for(let i = 0; i + length <= list.length; i += offset){
    result.push(list.slice(i, i + length));
  };
  return result;
};

// https://www.codewars.com/kata/5ab3495595df9ec78f0000b4/train/javascript

function binaryToString(binary){
    return binary
        .split('0b')
        .filter(Boolean)
        .map(b => String.fromCharCode(parseInt(b, 2)))
        .join('');
};