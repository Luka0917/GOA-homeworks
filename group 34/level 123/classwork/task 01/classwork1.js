new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Task 1 complete');
    });
}).then(msg => console.log(msg));