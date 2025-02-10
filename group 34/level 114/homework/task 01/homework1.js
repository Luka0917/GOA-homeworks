class Thermometer{
    constructor(){
        this._celsius = 0;
    };
    get temperature(){
        return (this._celsius * 9/5) + 32;
    };
    set temperature(celsius){
        if (typeof celsius === 'number'){
            this._celsius = celsius;
        }else{
            return "Error"
        };
    };
};