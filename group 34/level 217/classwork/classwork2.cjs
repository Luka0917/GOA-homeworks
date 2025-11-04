const fs = require('fs');
const path = './userText.txt';
const args = process.argv.slice(2);
const userString = args.slice(1).join(' ');

fs.readFile(path, 'utf8', (err, data) => {
    if(err){
        if(err.code === 'ENOENT'){
            fs.writeFile(path, 'Empty', (err) => {
                if(err) return console.error(err);
                console.log('File did not exist, created with "Empty"');
                if(args[0] === 'continue'){
                    fs.appendFile(path, userString, (err) => {
                        if(err) return console.error(err);
                        console.log(`Appended: "${userString}"`);
                    });
                }
            });
        }else{
            return console.error(err);
        }
    }else{
        console.log('Current content:' + data);
        if(args[0] === 'continue'){
            fs.appendFile(path, userString, (err) => {
                if (err) return console.error(err);
                console.log(`Appended: "${userString}"`);
            });
        }
    }
});