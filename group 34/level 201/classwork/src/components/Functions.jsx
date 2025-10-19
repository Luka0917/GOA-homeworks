export default function Functions(fruits, input){
    if(!input) return fruits;
    return fruits.filter((el) =>
        el.toLowerCase().includes(input.toLowerCase())
    );
};