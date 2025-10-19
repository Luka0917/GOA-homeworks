// 8kyu

// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(string) {
  string = string.split(',');
  if(string.length <= 2){
    return null;
  };
  return string.slice(1, -1).join(' ');
};

// https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript

function ensureQuestion(s) {
  if(s.endsWith("?")){
    return s;
  };
  return s + "?";
};

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str){
  if(str.length <= 2){
    return '';
  };
  let result = '';
  for(let i = 1; i < str.length - 1; i++){
    result += str[i];
  };
  return result;
};