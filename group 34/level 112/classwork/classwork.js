class Animals{
    constructor(img, name, climate, mainFood){
        this.img = img;
        this.name = name;
        this.climate = climate;
        this.mainFood = mainFood;
    };
    displayAnimal(){
        return `<div class="animal">
                    <img src="${this.img}" alt="Photo of ${this.name}">
                    <p class="animal-p">${this.name}</p>
                    <ul class="animal-ul">
                        <li>Climate: ${this.climate}</li>
                        <li>Food: ${this.mainFood}</li>
                    </ul>
                </div>`;
    };
};

class Birds extends Animals{
    constructor(img, name, climate, mainFood, canFly){
        super(img, name, climate, mainFood);
        this.canFly = canFly;
    };
    displayAnimal(){
        return `<div class="animal">
                    <img src="${this.img}" alt="Photo of ${this.name}">
                    <p class="animal-p">${this.name}</p>
                    <ul class="animal-ul">
                        <li>Climate: ${this.climate}</li>
                        <li>Food: ${this.mainFood}</li>
                        <li>Can Fly</li>
                    </ul>
                </div>`;
    };
};

class Result{
    constructor(animalsArr){
        this.animalsArr = animalsArr;
    };
    displayAnimals(){
        const main = document.getElementById('main');
        for(let i = 0; i < animalsArr.length; i++){
            main.innerHTML += animalsArr[i].displayAnimal();
        };
    };
};


const animalsArr = [
    new Animals('https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg', 'Lion', 'Savannas', 'Large herbivores'),
    new Birds('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrJAIBCQI0MX8nSE1hdHAKedrIimZbO1h3w&s', 'Owl', 'Forests', 'Small mammals', true)
];

new Result(animalsArr).displayAnimals();