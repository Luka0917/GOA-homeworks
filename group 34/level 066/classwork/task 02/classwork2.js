let num = [];

for (let i = 0; i < 30; i++) {
    num.push(i);
}

let evenNum = [];

for (let n = 0; n < num.length; n++) {
    if (n % 2 === 0) {
        evenNum.push(num[n]);
    }
}