const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function updateSlidedPosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`
};

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidedPosition();
});
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidedPosition();
});


function autoPlay() {
    setInterval (() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlidedPosition();
    }, 3000);
}

autoPlay();