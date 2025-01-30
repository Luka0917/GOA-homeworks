class Books{
    constructor(name, author, pages){
        this.name = name;
        this.author = author;
        this.pages = pages;
    };
    displayBooks(){
        return `
            <div class="books">
                <h2>${this.name}</h2>
                <h3>By ${this.author}</h3>
                <p>Pages: ${this.pages}</p>
            </div>
        `;
    };
};
class Adventure extends Books{
    constructor(name, author, pages, mainCharacter, chapters){
        super(name, author, pages);
        this.mainCharacter = mainCharacter;
        this.chapters = chapters;
    };
    displayBooks(){
        return `
            <div class="books">
                <h2>${this.name}</h2>
                <h3>By ${this.author}</h3>
                <p>Pages: ${this.pages}</p>
                <p>Main Character: ${this.mainCharacter}</p>
                <p>Chapters: ${this.chapters}</p>
            </div>
        `;
    };
};
class fantasy extends Books{
    constructor(name, author, pages, magicalCreatures, magic){
        super(name, author, pages);
        this.magicalCreatures = magicalCreatures;
        this.magic = magic;
    };
    displayBooks(){
        let haveMagic = "";
        if(this.magic === true){
            haveMagic = "People Use Magic";
        }else{
            haveMagic = "People Don't Use Magic";
        };
        return `
            <div class="books">
                <h2>${this.name}</h2>
                <h3>By ${this.author}</h3>
                <p>Pages: ${this.pages}</p>
                <p>Magical Creatures: ${this.magicalCreatures}</p>
                <p>${haveMagic}</p>
            </div>
        `;
    };
};

class Detective extends Books{
    constructor(name, author, pages, story, detectiveName){
        super(name, author, pages);
        this.story = story;
        this.detectiveName = detectiveName;
    };
    displayBooks(){
        return `
            <div class="books">
                <h2>${this.name}</h2>
                <h3>By ${this.author}</h3>
                <p>Pages: ${this.pages}</p>
                <p>Story: ${this.story}</p>
                <p>Detective: ${this.detectiveName}</p>
            </div>
        `;
    };
};

class Display{
    constructor(booksArr){
        this.arr = booksArr;
    };
    display(){
        const main = document.getElementById('main');
        for(let i = 0; i < this.arr.length; i++){
            main.innerHTML += this.arr[i].displayBooks();
        };
    };
};

let booksArr = [
    new Books('The Night Circus', 'Erin Morgenstern', 387),
    new Books('To Kill a Mockingbird', 'Harper Lee', 281),
    new Adventure('Treasure Island', 'Robert Louis Stevenson', 288, 'Jim Hawkins', 34),
    new fantasy('Eragon', 'Christopher Paolini', 509, 'dragons', true),
    new fantasy('Eragon', 'Christopher Paolini', 509, 'dragons', false),
    new Detective('The ABC Murders', 'Agatha Christie', 256, 'murder', 'Hercule Poirot'),
];

new Display(booksArr).display();