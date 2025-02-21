new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Task 3 failed');
    }, 2000);
}).catch(err => console.log(err));