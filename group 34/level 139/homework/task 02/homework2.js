// input
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
// output
const yearB = document.getElementById('year-b');
const monthB = document.getElementById('month-b');
const dayB = document.getElementById('day-b');

const btn = document.getElementById('btn');
const errorP = document.getElementById('error-p');

btn.addEventListener('click', () => {
    const d = parseInt(day.value);
    const m = parseInt(month.value);
    const y = parseInt(year.value);

    if(d === '' || m === '' || y === '' || d <= 0 || d > 31 || m <= 0 || m > 12 || y <= 0){
        errorP.textContent = 'Wrong input';
    };

    const now = new Date();
    const yNow = now.getFullYear();
    const mNow = now.getMonth() + 1;
    const dNow = now.getDate();

    yearB.textContent = yNow - y;
    monthB.textContent = mNow - m;
    dayB.textContent = dNow - d;
});