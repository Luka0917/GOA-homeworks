// 1
function Person(name, age){
    this.name = name;
    this.age = age;
    this.introduce = function(){
        console.log("Hi, I am " + name + " and I am " + age + " years old.");
    }
};

const person1 = new Person("Luka", 16).introduce();

// 2
function Book(title, author = "Unknown"){
    this.title = title;
    this.author = author;
    this.getDetails = function(){
        console.log("This is " + title + " writen by " + author);
    }
};

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling").getDetails();

// 3
function Classroom(students){
    this.students = students;
    this.countStudents = function(){
        console.log(students.length);
    }
};

const classroom1 = new Classroom(["Luka", "Toko", "Andria", "Giorgi", "Saba"]).countStudents();

// 4
function Counter(){
    this.num = 0;
    this.increment = function(){
        this.num += 1;
        console.log(this.num);
    }
    this.getValue= function(){
        console.log(this.num);
    }
};

const counter1 = new Counter().increment();
const counter2 = new Counter().getValue();

// 5
function Light(){
    this.state = "off";
    this.toggle = function(){
        if(this.state === "off"){
            this.state = "on";
            console.log(this.state);
        }
        else{
            this.state = "off";
            console.log(this.state);
        }
    }
};

const light1 = new Light().toggle();

// 6
function Product(name, price){
    this.name = name;
    this.price = price;
    this.getDetails = function(){
        console.log("Product: " + name + ", Price: " + price + " USD");
    }
};

const product1 = new Product("Bread", 1.2).getDetails();

// 7
function User(username, email, phone){
    this.username = username;
    this.contact = {
        email: email,
        phone: phone
    };
    this.getContactInfo = function(){
        console.log("Username: " + this.username);
        console.log("Email: " + this.contact.email);
        console.log("Phone: " + this.contact.phone);
    };
}

const user1 = new User("luka123", "tatuashvililuka@gmail.com", 123456789).getContactInfo();

// 8
function Library(books){
    this.books = books;
    this.listBooks = function() {
        if (this.books.length === 0){
            console.log("No books in the library!");
        }
        else{
            for (const book of this.books){
                console.log("Title: " + book.title + ", Author: " + book.author);
            }
        }
    }
};

const myLibrary = new Library([
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
]).listBooks();

// 9
function Cart(){
    this.items = [];
    this.addItem = function(item){
        this.items.push(item);
    }
    this.getItems = function(){
        if (this.items.length === 0){
            console.log("Cart is empty!");
        }
        else{
            console.log("Items in the cart: " + this.items);
        }
    }
};

const cart1 = new Cart();
cart1.addItem("Bread");
cart1.addItem("Borjomi");
cart1.getItems();

// 10
function Student(name, marks){
    this.name = name;
    this.marks = marks;
    this.hasPassed = function(){
        if (this.marks.length === 0){
            console.log(false);
        }
        else{
            let total = 0;
            for (let i = 0; i < this.marks.length; i++){
                total += this.marks[i];
            }
            const average = total / this.marks.length;
            console.log(average >= 50);
        }
    }
}

const student1 = new Student("Luka", [60, 70, 80]).hasPassed(); // true
const student2 = new Student("Giorgi", [20, 30, 40]).hasPassed(); // false