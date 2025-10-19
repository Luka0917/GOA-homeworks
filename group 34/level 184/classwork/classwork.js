// 8kyu

// https://www.codewars.com/kata/547274e24481cfc469000416

class Human{
  constructor(){
    this.species = 'Homo sapiens';
  }
}
class Man extends Human{
  constructor(){
    super();
    this.gender = 'male';
  }
}
class Woman extends Human{
  constructor(){
    super();
    this.gender = 'female';
  }
}
class God{
  static create(){
    return [new Man(), new Woman()];
  }
}

// https://www.codewars.com/kata/56453a12fcee9a6c4700009c

function closeCompare(a, b, margin = 0){
  if(Math.abs(a - b) <= margin){
    return 0;
  }else if(a < b){
    return -1;
  }else{
    return 1;
  }
}

// https://www.codewars.com/kata/55e8aba23d399a59500000ce

class Hero {
  constructor(name = 'Hero'){
    this.name = name;
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}

// https://www.codewars.com/kata/568018a64f35f0c613000054

class Guesser{
  constructor(number, lives){
    this.number = number;
    this.lives = lives;
  }
  guess(n){
    if (this.lives <= 0){
      throw new Error("No lives left");
    }
    if(n === this.number){
      return true;
    }else{
      this.lives--;
      return false;
    }
  }
}