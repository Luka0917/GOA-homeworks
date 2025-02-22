new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error!");
    }, 1000);
}).catch(err => console.log(err));