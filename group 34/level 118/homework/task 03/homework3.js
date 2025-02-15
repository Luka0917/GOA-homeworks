class Bank{
    #balance;
    constructor(balance){
        this.balance = balance;
    };
    set balance(newBalance){
        if(newBalance < 0){
            throw new Error('Balance Must Be Positive Brokie!');
        }else{
            this.#balance = newBalance;
        };
    };
    get balance(){
        return this.#balance;
    };
    deposit(amount){
        this.#balance += amount;
        return `Your Account: ${this.#balance}`;
    };
};

console.log(new Bank(100).deposit(10));