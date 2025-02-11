class CircleCalculations{
    static pi = 3.14;
    static calculateDiametre(radius){
        return 2 * radius;
    };
    static circleArea(radius){
        return this.pi * Math.pow(radius, 2);
    };
};

console.log(CircleCalculations.pi);
console.log(CircleCalculations.calculateDiametre(10));
console.log(CircleCalculations.circleArea(5));