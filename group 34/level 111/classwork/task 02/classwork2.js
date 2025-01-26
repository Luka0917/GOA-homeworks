class animal{
    constructor(species, name, age){
        this.species = species;
        this.name = name;
        this.age = age;
    };
};

class mammal extends animal{
    constructor(species, name, age, moves){
        super(species, name, age);
        this.moves = moves
    };
};

class dog extends mammal{
    constructor(species, name, age, moves, sleeps){
        super(species, name, age, moves);
        this.sleeps = sleeps;
    };
};

console.log(new dog('poodle', 'max', 3, true, true));