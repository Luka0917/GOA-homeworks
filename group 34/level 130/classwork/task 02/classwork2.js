async function func(){
    const div = document.querySelector('div');
    div.innerHTML = '';
    let fetchedData = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    if(!fetchedData.ok){
        throw new Error('Error!');
    };
    let data = await fetchedData.json();
    if(data.type === 'twopart'){
        let setupP = document.createElement('p');
        let deliveryP = document.createElement('p');
        setupP.innerHTML = `<b>Setup:</b> ${data.setup}`;
        deliveryP.innerHTML = `<b>Delivery:</b> ${data.delivery}`;
        div.appendChild(setupP);
        div.appendChild(deliveryP);
    }else{
        let result = document.createElement('p');
        result.innerHTML = `<b>Joke:</b> ${data.joke}`;
        div.appendChild(result);
    };
};
func();
document.querySelector('button').addEventListener('click', () => func());