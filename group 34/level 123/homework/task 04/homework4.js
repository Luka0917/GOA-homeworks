new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Task 3 failed');
    }, 1000 * Math.floor(Math.random() * 4) + 1);
}).catch(err => console.log(err));