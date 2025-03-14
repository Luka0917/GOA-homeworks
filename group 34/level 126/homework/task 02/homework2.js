async function func(){
    try{
        let fetchedData = await fetch('https://dog.ceo/api/breeds/image/random');
        if(!fetchedData.ok){
            throw new Error('Error!');
        };
        let data = await fetchedData.json();
        console.log(data);
        const img = document.querySelector('img');
        img.src = data.message;
    }catch(err){
        console.error(err);
    };
};
document.querySelector('button').addEventListener('click', () => func());