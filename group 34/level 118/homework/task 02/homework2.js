class ReadibleOnly{
    constructor(name){
        this._name = name;
    };
    get name(){
        return this._name;
    };
};

let obj = new ReadibleOnly('luka');
console.log(obj.name);
obj.name = 'gio';