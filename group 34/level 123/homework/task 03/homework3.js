new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First');
    }, 1000 * Math.floor(Math.random() * 3) + 1);
}).then(msg => {
    console.log(msg);
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second');
        }, 1000 * Math.floor(Math.random() * 3) + 1);
    }).then(msg_2 => console.log(msg_2));
});