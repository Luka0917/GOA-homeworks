const body = document.querySelector("body");

const pcName1 = document.createElement("h3");
const info1 = document.createElement("p");
const img1 = document.createElement("img");

const pc1 = {
    name: pcName1.textContent = "pc 1",
    info: info1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: img1.src = "https://www.punchtechnology.co.uk/wp-content/uploads/2024/02/vida2-1.jpg"
}

body.appendChild(pc1);