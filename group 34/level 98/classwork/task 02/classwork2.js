const obj = [
    {name: 'lasha', age: 30},
    {name: 'merabi', age: 15}
];

for(let i = 0; i < obj.length; i++){
    for(let key in obj[i]){
        console.log(`${key}: ${obj[i][key]}`);
    }
}