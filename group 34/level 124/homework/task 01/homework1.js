document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.getElementById('txt').value);
        }, parseInt(document.getElementById('delay').value) * 1000)
    }).then(msg => console.log(msg));
});