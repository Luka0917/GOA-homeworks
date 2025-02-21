new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First');
    }, 2000);
}).then(msg => {
    console.log(msg);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second');
        }, 1000);
    });
}).then(msg_2 => console.log(msg_2));