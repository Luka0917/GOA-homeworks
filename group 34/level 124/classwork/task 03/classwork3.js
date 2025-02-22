new Promise((resolve, reject) => {
    resolve(Math.random());
}).then(msg => {
    new Promise((resolve, reject) => {
        resolve(msg > 0.5);
    }).then(msg_2 => {
        new Promise((resolve, reject) => {
            if(msg_2){
                resolve('number is greater than 0.5');
            }else{
                setTimeout(() => {
                    resolve('number is less than 0.5');
                }, 2000);
            };
        }).then(msg_3 => console.log(msg_3));
    });
});