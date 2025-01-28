class cars{
    constructor(car, color, year){
        this.car = car;
        this.color = color;
        this.year = year;
    };
    engineStart(){
        return "Engine start";
    };
    fullFuel(){
        return "My car's fuel tank is full";
    };
};

class electricCar extends cars{
    constructor(car, color, year, batteryLevel){
        super(car, color, year);
        this.batteryLevel = batteryLevel;
    };
    engineStart(){
        return "Electric engine start";
    };
    battery(){
        return `Battery level is ${this.batteryLevel}%`;
    };
};

console.log(new cars('BMW', 'black', 2002).engineStart());
console.log(new cars('BMW', 'black', 2002).fullFuel());

console.log("");

console.log(new electricCar('tesla', 'white', 2022, 50).engineStart());
console.log(new electricCar('tesla', 'white', 2022, 50).battery());