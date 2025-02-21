new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve('Task 1 complete');
        }else{
            resolve('Task 1 was quick');
        };
    }, 1000 * Math.floor(Math.random() * 5) + 1);
}).then(msg => console.log(msg));