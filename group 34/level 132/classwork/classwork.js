async function func(){
    const API_key = '9363b45ad7338217562851c3f02adbac';
    let city_name = 'Tbilisi';
    let fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`);
    if(!fetchedData.ok){
        throw new Error('Error!');
    };
    let data = await fetchedData.json();
    console.log(data);
    document.querySelector('h1').textContent = `${data.name}: ${data.main.temp}`;
};
func();