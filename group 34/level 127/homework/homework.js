async function func(){
    try{
        let h1 = document.querySelector('h1');
        let fetchedData = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!fetchedData.ok){
            throw new Error('Error!');
        }else if(fetchedData.status === 200){
            h1.innerHTML = `Status: <b style="color: green;">${fetchedData.status}</b>`;
        }else if(fetchedData.status === 302 || fetchedData.status === 304){
            h1.innerHTML = `Status: <b style="color: blue;">${fetchedData.status}</b>`;
        };
        let data = await fetchedData.json();
        data.sort((a, b) => a.name.localeCompare(b.name));
        for(let i = 0; i < data.length; i++){
            const h2 = document.createElement('h2');
            h2.textContent = `Name: ${data[i].name}`;
            document.body.appendChild(h2);
        };
    }catch(err){
        console.error(err);
    };
};
func();