const form = document.querySelector('form');
const input = document.querySelector('input');
const mainDiv = document.getElementById('main');

let prices = [];
let products = [];

async function getData(){
    try{
        const api = await fetch('https://fakestoreapi.com/products');
        if(!api.ok) throw new Error('Error!');
        const data = await api.json();
        products = data;
        mainDiv.innerHTML = '';
        data.forEach(el => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-div';
            productDiv.innerHTML = `
                <img src="${el.image}" alt="photo os product #${el.id}">
                <p>${el.price}$</p>
                <button>Add to Cart</button>
            `;
            mainDiv.appendChild(productDiv);
            prices.push(Math.floor(el.price));
        }); 
        prices.sort((a, b) => a - b);
    }catch(err){
        console.error(err);
    };
};
getData();

function binarySearch(arr, x){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] == x) return mid;
        if(arr[mid] > x) end = mid - 1;
        else start = mid + 1;
    };
    return -1;
};
form.addEventListener('submit', e => {
    e.preventDefault();
    const searchValue = Math.floor(Number(input.value));
    mainDiv.innerHTML = '';
    const foundIndex = binarySearch(prices, searchValue);

    if(foundIndex === -1){
        const message = document.createElement('h2');
        message.textContent = 'There is no product in that price';
        mainDiv.appendChild(message);
    }else{
        const matchedProducts = products.filter(p => Math.floor(p.price) === searchValue);
        matchedProducts.forEach(el => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-div';
            productDiv.innerHTML = `
                <img src="${el.image}" alt="photo of product #${el.id}">
                <p>${el.price}$</p>
                <button>Add to Cart</button>
            `;
            mainDiv.appendChild(productDiv);
        });
    };
});