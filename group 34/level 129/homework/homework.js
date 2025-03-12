async function func(){
    try{
        let fetchedData = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!fetchedData.ok){
            throw new Error('Error!');
        }
        let data = await fetchedData.json();
        console.log(data); // for debuging
        const name = document.getElementsByClassName('name');
        const userName = document.getElementsByClassName('username');
        const email = document.getElementsByClassName('email');
        const adderss = document.getElementsByClassName('address');
        const company = document.getElementsByClassName('company');
        for(let i = 0; i < name.length; i++){
            name[i].textContent = `Name: ${data[i].name}`;
            userName[i].textContent = `Username: ${data[i].username}`;
            email[i].textContent = `Email: ${data[i].email}`;
            adderss[i].textContent = `Address: ${data[i].address.city}`;
            company[i].textContent = `Company: ${data[i].company.name}`;
        }
    }catch(err){
        console.error(err);
    };
};
func();