class TimeShit{
    static date = new Date();
    static readibleTime(ms){
        const date = new Date(ms);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `Time: ${hours}:${minutes}:${seconds}`;
    };
};

console.log(TimeShit.date);
console.log(TimeShit.readibleTime(14900000));