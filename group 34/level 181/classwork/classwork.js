// 8kyu

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

// https://www.codewars.com/kata/527b3cd0492b6b15250060af

let items = [];
items.push({a: "b", c: "d"});

// https://www.codewars.com/kata/521cd52e790405a74800032c

function wrap(value){
  return {
    value: value
  };
};

// https://www.codewars.com/kata/54dba07f03e88a4cec000caf

function Dog(breed){
  this.breed = breed;
}
Dog.prototype.bark = function(){
  return "Woof";
};
var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");