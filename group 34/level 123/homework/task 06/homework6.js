new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() < 0.3){
            reject('Task 3 failed');
        }else{
            resolve('Task 3 complete');
        };
    }, 1000 * Math.floor(Math.random() * 4) + 1);
})
.then(msg => console.log(msg))
.catch(err => console.log(err));