class RandomShit{
    static char_set = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    static randomChar(){
        for(let i = 0; i < this.char_set.length; i++){
            return this.char_set[Math.floor(Math.random() * RandomShit.char_set.length)];
        };
    };
    static randomString(strLength){
        let result = '';
        for(let i = 0; i < strLength; i++){
            result += this.char_set[Math.floor(Math.random() * RandomShit.char_set.length)];
        };
        return result;
    };
    static randomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
};

console.log(RandomShit.char_set);
console.log(RandomShit.randomChar());
console.log(RandomShit.randomString(12));
console.log(RandomShit.randomNumber(2, 10));