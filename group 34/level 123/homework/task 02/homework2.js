new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Task 1 complete');
    }, 1000 * Math.floor(Math.random() * 5) + 1);
}).then(msg => console.log(msg));