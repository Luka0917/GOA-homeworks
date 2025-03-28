async function joke(categoryV){
    const jokeDiv = document.getElementById('joke');
    try{
        let fetchedData = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
        if(!fetchedData.ok){
            throw new Error('Error!');
        };
        let data = await fetchedData.json();
        if(data.category === categoryV){
            if(data.type === 'twopart'){
                jokeDiv.innerHTML = `
                    <p><b>Setup:</b> ${data.setup}</p>
                    <p><b>Delivery:</b> ${data.delivery}</p>
                `;
            }else{
                jokeDiv.innerHTML = `
                    <p><b>Joke:</b> ${data.joke}</p>
                `;
            };
        }else{
            jokeDiv.innerHTML = `<p>Loading...</p>`;
            joke(categoryV);
        };
    }catch(err){
        console.error(err);
    };
};
async function advice(){
    const adviseP = document.getElementById('advice');
    let fetchedData = await fetch('https://api.adviceslip.com/advice');
    if(!fetchedData.ok){
        throw new Error('Error!');
    };
    let data = await fetchedData.json();
    adviseP.innerHTML = `<b>Advice:</b> ${data.slip.advice}`;
};

const jokeDiv = document.getElementById('joke');
const adviseP = document.getElementById('advise');
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    joke(form.category.value);
});
document.getElementById('advise-btn').addEventListener('click', () => {
    advice();
});
window.addEventListener('load', () => {
    joke(form.category.value);
    advice();
});