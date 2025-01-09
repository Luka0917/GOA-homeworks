let p = document.getElementById("p");

let userTime = 20;

const time = setInterval(function() {
    userTime--;
    p.textContent = "Seconds passed: " + userTime;
    if (userTime === 0){
        clearInterval(time);
        p.textContent = "Time is up!";
    }
}, 1000)