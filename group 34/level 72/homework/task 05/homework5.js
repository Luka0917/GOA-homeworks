let seconds = 0;
let running = false;
let interval;

function updateDisplay() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    let displayMins = "00";
    let displaySecs = "00";

    if (mins > 9){
        displayMins = mins.toString();
    }
    else if (mins > 0) {
        displayMins = "0" + mins;
    }

    else if (secs > 9){
        displaySecs = secs.toString();
    }
    else {
        displaySecs = "0" + secs;
    }

    document.getElementById('time').textContent = displayMins + ':' + displaySecs;
}

document.getElementById('start').onclick = () => {
    if (!running) {
        running = true;
        interval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
};

document.getElementById('pause').onclick = () => {
    running = false;
    clearInterval(interval);
};

document.getElementById('reset').onclick = () => {
    running = false;
    clearInterval(interval);
    seconds = 0;
    updateDisplay();
};