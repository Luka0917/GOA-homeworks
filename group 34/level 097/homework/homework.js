const body = document.querySelector('body');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');
const date = new Date();

const emails = [
    { subject: "travel", content: "Don't forget your tickets", receivedDate: "2024-12-15" },
    { subject: "report", content: "Please read the last report", receivedDate: "2024-12-12" },
    { subject: "travel", content: "I have a very good offer", receivedDate: "2024-12-13" },
    { subject: "realization", content: "Small errors are possible", receivedDate: "2024-12-10" }
];

const form = document.getElementById('form-1').addEventListener('submit', e => {
    e.preventDefault();
    for(let i of emails){
        if(input.value === i.subject){
            ul.innerHTML = `
                <li>${i.subject}</li>
                <li>${i.content}</li>
                <li>${i.receivedDate}</li>
            `;
        }
    };
});

const form2 = document.getElementById('form-2').addEventListener('submit', e => {
    e.preventDefault();
    emails.push({subject: `${input2.value}`, content: `${input3.value}`, receivedDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`});
});