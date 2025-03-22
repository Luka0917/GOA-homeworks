async function func(){
    const author = document.getElementsByClassName('author');
    const content = document.getElementsByClassName('content');
    const moreInfo = document.getElementsByClassName('more-info');
    const input = document.querySelector('input');
    const divs = document.getElementsByClassName('divs');

    let fetchedData = await fetch('https://newsapi.org/v2/everything?q=apple&from=2025-03-20&to=2025-03-20&sortBy=popularity&apiKey=2bc5222c61a84a6890fddea2d8c5fe74');
    if(!fetchedData.ok){
        throw new Error('Error!');
    };
    let data = await fetchedData.json();
    for(let i = 0; i < 10; i++){
        if(data.articles[i].author === null){
            author[i].textContent = 'No Author';
        }else{
            author[i].textContent = data.articles[i].author;
        };
        content[i].textContent = data.articles[i].content;
        moreInfo[i].href = data.articles[i].url;
    };
    input.addEventListener('input', () => {
        for(let x = 0; x < 10; x++){
            if(input.value === ''){
                divs[x].style.opacity = '1';
            }else if(author[x].textContent.toLowerCase().includes(input.value.toLowerCase())){
                divs[x].style.opacity = '1';
            }else{
                divs[x].style.opacity = '0';
            };
        };
    });
};
func();