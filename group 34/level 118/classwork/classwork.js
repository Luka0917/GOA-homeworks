class Card{
    #pin;
    #facts;
    constructor(money, pin, facts){
        this.money = money;
        this.pin = String(pin);
        this.facts = facts;
    };
    withdraw(){
        let access_pin = prompt('Enter Your Pin To Withdraw Money: ');
        let access_fact = prompt('Enter One Fact About You: ');

        if(access_pin === this.#pin && this.#facts.includes(access_fact)){
            let withdrawMoney = Number(prompt('Enter Money To Withdraw: '));
            if(withdrawMoney > this._money){
                return 'Invalid Withdrawal';
            }else{
                this._money -= withdrawMoney;
                return `Your Account: ${this._money}`;
            };
        }else{
            return 'Invalid Pin Or Fact';
        };
    };
    set money(myMoney){
        if(myMoney < 0){
            throw new Error('Invalid Amount Money Can Not Be Negative');
        }else{
            this._money = myMoney;
        };
    };
    set pin(newPin){
        if(newPin.length === 4){
            this.#pin = newPin;
        }else{  
            throw new Error('Invalid Pin');
        };
    };
    set facts(newFacts){
        if(newFacts.length === 1){
            throw new Error('We Need Minimum 2 Facts About You!')
        }
        this.#facts = newFacts;
    };
    get money(){
        return this._money;
    };
};

let obj = new Card(100, 1234, ['eats apple', 'drinks water']);
let obj1 = new Card(999, 5678, ['eats banana', 'drinks fanta']);
console.log(obj.withdraw());
console.log(obj1.withdraw());