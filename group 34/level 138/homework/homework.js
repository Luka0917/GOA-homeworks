const price = document.getElementsByClassName('price');
const cartBtn = document.getElementsByClassName('cart-btn');
const sumP = document.getElementById('sum');

let total = 0;

for(let i = 0; i < cartBtn.length; i++){
    cartBtn[i].addEventListener('click', () => {
        total += parseInt(price[i].textContent[1]);
        sumP.textContent = `Total: $${total.toFixed(2)}`;
    });
};
document.getElementById('order-btn').addEventListener('click', () => {
    if(sumP.textContent === 'Total: $0.00'){
        alert('There is nothing to order!');
    }else{
        alert('Order taken!');
    };
});