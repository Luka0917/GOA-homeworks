const form = document.querySelector("form");

const validate = [
    ["luka", "tatuashvililuka@gmail.com", "lUka1*1!", "lUka1*1", "18"],
    ["giorgi", "gvarigiorgi@gmail.com", "gi0456$$", "gi0456$$", "20"],
    ["andria", "andriagvari@gmail.com", "Andri@7!", "Andri@789!", "32"]
]

form.addEventListener("submit", function(e){
    e.preventDefault();
    for(let i = 0; i < 5; i++){
        if(form[i] == validate[i]){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
})