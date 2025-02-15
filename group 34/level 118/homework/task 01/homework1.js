class PrivateShit{
    #id;
    constructor(id){
        this.id = String(id);
    };
    set id(newId){
        if(newId.length > 7){
            throw new Error('Invalid ID!');
        }else{
            this.#id = newId;
        };
    };
    get id(){
        return this.#id;
    };
};

console.log(new PrivateShit(1234567).id);