const slider = document.getElementById('slider');
const buttons = document.querySelectorAll('#buttons button');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        const index = buttons[i].getAttribute('data-index');
        slider.style.transform = `translateX(-${index * 100}%)`;
    });
};