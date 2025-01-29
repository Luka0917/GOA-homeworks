class books{
    constructor(name, author, pages){
        this.name = name;
        this.author = author;
        this.pages = pages;
    };
    get bookText(){
        return `"${this.name}" was written by ${this.author} and contains ${this.pages} pages`;
    };
    reading(){
        return `I started reading "${this.name}" by ${this.author}`;
    };
    pagesRead(readPages){
        return `I started ${this.pages} pages thick book, and i have already read ${readPages} pages`;
    };
};

class adventure extends books{
    constructor(name, author, pages, mainCharacter, chapters){
        super(name, author, pages);
        this.mainCharacter = mainCharacter;
        this.chapters = chapters;
    };
    get bookText(){
        return `${super.bookText} and follows the journey of ${this.mainCharacter} through ${this.chapters} chapters.`;
    };
    reading(){
        return `I started reading "${this.name}" by ${this.author} where main character is ${this.mainCharacter}`;
    };
    mainCharacterText(){
        return `In "${this.name}" main Characters is ${this.mainCharacter}`;
    };
};

class fantasy extends books{
    constructor(name, author, pages, magicalCreatures, magic){
        super(name, author, pages);
        this.magicalCreatures = magicalCreatures;
        this.magic = magic;
    };
    get bookText(){
        return `${super.bookText} and there are ${this.magicalCreatures}`;
    };
    reading(){
        return `I love reading "${this.name}" by ${this.author} because of ${this.magicalCreatures}`;
    };
    magicText(){
        let haveMagic = '';
        if(this.magic === true){
            haveMagic = ' and people use magic';
        };
        return `In "${this.name}" there are ${this.magicalCreatures}${haveMagic}`;
    };
};

class detective extends books{
    constructor(name, author, pages, story, detectiveName){
        super(name, author, pages);
        this.story = story;
        this.detectiveName = detectiveName;
    };
    get bookText(){
        return `${super.reading()} where detective named ${this.detectiveName} who investigates ${this.story}`;
    };
    reading(){
        return `I started reading "${this.name}" by ${this.author} a book about ${this.story} and it has already gotten me interested`;
    };
    detectiveText(){
        return `"${this.name}" is about ${this.story} where detective is ${this.detectiveName}`;
    };
};

console.log(new books('The Night Circus', 'Erin Morgenstern', 387).bookText);
console.log(new books('The Night Circus', 'Erin Morgenstern', 387).reading());
console.log(new books('The Night Circus', 'Erin Morgenstern', 387).pagesRead(233));

console.log("");

console.log(new adventure('Treasure Island', 'Robert Louis Stevenson', 288, 'Jim Hawkins', 34).bookText);
console.log(new adventure('Treasure Island', 'Robert Louis Stevenson', 288, 'Jim Hawkins', 34).reading());
console.log(new adventure('Treasure Island', 'Robert Louis Stevenson', 288, 'Jim Hawkins', 34).mainCharacterText());

console.log("");

console.log(new fantasy('Eragon', 'Christopher Paolini', 509, 'dragons', true).bookText);
console.log(new fantasy('The Hobbit', 'J.R.R. Tolkien', 310, 'dragons', false).reading());
console.log(new fantasy('Eragon', 'Christopher Paolini', 509, 'dragons', true).magicText());
console.log(new fantasy('The Hobbit', 'J.R.R. Tolkien', 310, 'dragons', false).magicText());

console.log("");

console.log(new detective('The ABC Murders', 'Agatha Christie', 256, 'murder', 'Hercule Poirot').bookText);
console.log(new detective('The ABC Murders', 'Agatha Christie', 256, 'murder', 'Hercule Poirot').reading());
console.log(new detective('The ABC Murders', 'Agatha Christie', 256, 'murder', 'Hercule Poirot').detectiveText());