const process = require('node:process');
const fs = require('node:fs');

let argument = process.argv.slice(2).join(' ');

try{
    fs.writeFileSync('./userText.txt', argument);
}catch(err){
    console.error(err);
}