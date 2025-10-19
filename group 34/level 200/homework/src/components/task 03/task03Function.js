const data = ["Apple", "Banana", "Orange"];

export function dataChange(input){
    return data.filter(item => item.toLowerCase().includes(input.toLowerCase()));
};

export function getInitialData(){
    return data;
};