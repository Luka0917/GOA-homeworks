const body = document.querySelector("body");
const main = document.createElement("div");
main.id = "main";

const input = document.querySelector("input");
const form = document.querySelector("form");
const lowToMax = document.getElementById("low-max");
const maxToLow = document.getElementById("max-low");
const random = document.getElementById("random");

const titles = [
    "The Shawshank Redemption (1994)",
    "The Godfather (1972)",
    "The Dark Knight (2008)",
    "The Godfather: Part II (1974)",
    "12 Angry Men (1957)",
    "Schindler's List (1993)",
    "The Lord of the Rings: The Return of the King (2003)",
    "Pulp Fiction (1994)",
    "The Good, the Bad and the Ugly (1966)",
    "The Lord of the Rings: The Fellowship of the Ring (2001)",
    "Forrest Gump (1994)",
    "Fight Club (1999)"
];

const photos = [
    "/group 34/level 90/classwork/photos/movie-1.jpg",
    "/group 34/level 90/classwork/photos/movie-2.jpg",
    "/group 34/level 90/classwork/photos/movie-3.jpg",
    "/group 34/level 90/classwork/photos/movie-4.jpg",
    "/group 34/level 90/classwork/photos/movie-5.jpg",
    "/group 34/level 90/classwork/photos/movie-6.jpg",
    "/group 34/level 90/classwork/photos/movie-7.jpg",
    "/group 34/level 90/classwork/photos/movie-8.jpg",
    "/group 34/level 90/classwork/photos/movie-9.jpg",
    "/group 34/level 90/classwork/photos/movie-10.jpg",
    "/group 34/level 90/classwork/photos/movie-11.jpg",
    "/group 34/level 90/classwork/photos/movie-12.jpg"
];

ratings = [
    "IMDb Rating: 9/10",
    "IMDb Rating: 9/10",
    "IMDb Rating: 9/10",
    "IMDb Rating: 9/10",
    "IMDb Rating: 9/10",
    "IMDb Rating: 9/10",
    "IMDb Rating: 8/10",
    "IMDb Rating: 8/10",
    "IMDb Rating: 8/10",
    "IMDb Rating: 8/10",
    "IMDb Rating: 8/10",
    "IMDb Rating: 8/10",
]

const divs = [];
let num = 1;
for(let i = 0; i < 12; i++){
    let card = document.createElement("div")
    card.className = "cards";
    card.id = `card-${num}`
    num++;

    let title = document.createElement("p");
    title.textContent = titles[i]
    title.className = "title"
    card.appendChild(title)

    let img = document.createElement("img");
    img.src = photos[i];
    card.appendChild(img)

    let rating = document.createElement("p");
    rating.textContent = ratings[i]
    rating.className = "rating"
    card.appendChild(rating)

    divs.push(card)
}

for(let m = 0; m < 12; m++){
    main.appendChild(divs[m])
}
body.appendChild(main)

// img slider

let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.display = 'block';
});

document.getElementById('prev').addEventListener('click', () => {
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].style.display = 'block';
});