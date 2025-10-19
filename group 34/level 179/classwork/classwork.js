// 8kyu

// https://www.codewars.com/kata/56e6a330715e7221d9000a3b

Number.prototype.times = function(f){
  for(let i = 0; i < this; i++){
    f(i);
  };
};

// https://www.codewars.com/kata/56dd9b84fe5754786f0014f7

Array.prototype.filter = function(func){
  const result = [];
  for(let i = 0; i < this.length; i++){
    if(func(this[i], i, this)){
      result.push(this[i]);
    };
  };
  return result;
};

// https://www.codewars.com/kata/570bcd9715944a2c8e000009

function sc(floor) {
  if(floor <= 1) return "";
  const scream = "Aa~ ".repeat(floor - 1);
  const landing = "Pa!";
  const postScream = floor <= 6 ? " Aa!" : "";
  return scream + landing + postScream;
};