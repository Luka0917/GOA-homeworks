const slider = document.querySelector('.slides');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        slider.style.transform = `translateX(-${index * 100}%)`;
    });
});