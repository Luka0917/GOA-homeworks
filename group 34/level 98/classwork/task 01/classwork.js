const body = document.querySelector("body");
const form = document.querySelector("form");
const emailsOptions = document.getElementById("emails");

const emails = [
    { subject: "Travel", content: "Don't forget your tickets", receivedDate: "2024-12-15" },
    { subject: "Report", content: "Please read the last report", receivedDate: "2024-12-12" },
    { subject: "Travel", content: "I have a very good offer", receivedDate: "2024-12-13" },
    { subject: "Realization", content: "Small errors are possible", receivedDate: "2024-12-10" }
];

form.addEventListener("submit", function(e){
    e.preventDefault();
    for(let i of emails){
        body.innerHTML += `
            <ul>
                <li>${emailsOptions.value}</li>
            </ul>
        `
    }
})