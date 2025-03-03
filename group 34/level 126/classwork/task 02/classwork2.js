const setup = document.getElementById('setup');
const delivery = document.getElementById('delivery');

function getJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode').then(res => res.json()).then(res_2 => {
        console.log(res_2);
        if(res_2.type === "twopart"){
            new Promise((resolve, reject) => {
                setup.textContent = resolve(res_2.setup);
            }).then(msg => {
                setup.textContent = `Setup: ${msg}`;
                setTimeout(() => {
                    delivery.textContent = `Delivery: ${res_2.delivery}`;
                }, 1000);
            });
        }else{
            getJoke();
        };
    });
};
document.querySelector('button').addEventListener('click', () => getJoke());