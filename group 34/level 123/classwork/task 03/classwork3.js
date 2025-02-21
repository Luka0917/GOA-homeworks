new Promise((resolve, reject) => {
    resolve(5);
}).then(num => num * 2).then(num => console.log(num));