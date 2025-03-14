async function func(){
    try{
        let fetchedData = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!fetchedData.ok){
            throw new Error('Error!');
        };
        let data = await fetchedData.json();
        data.sort((a, b) => a.name.localeCompare(b.name));
        for(let i = 0; i < data.length; i++){
            const h1 = document.createElement('h1');
            h1.textContent = `Name: ${data[i].name}`;
            document.body.appendChild(h1);
        };
    }catch(err){
        console.error(err);
    };
};
func();