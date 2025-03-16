const img = document.querySelector('img');
async function func(url){
    let fetchedData = await fetch(url);
    if(!fetchedData.ok){
        throw new Error('Error!');
    }
    let data = await fetchedData.json();
    return data;
};
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    if(document.getElementById('cat').checked){
        func('https://api.thecatapi.com/v1/images/search').then(res => {
            img.src = res[0].url;
        });
    }else if(document.getElementById('dog').checked){
        func('https://dog.ceo/api/breeds/image/random').then(res => {
            img.src = res.message;
        });
    }else{
        func('https://randomfox.ca/floof/').then(res => {
            img.src = res.image;
        });
    };
    img.style.opacity = '1';
});