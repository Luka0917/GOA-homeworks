const me = {
    firstName: "Luka",
    lastName: "Tatuashvili",
    age: 16,
    greet: function(){
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    },
    fullInfo: function(){
        console.log("Hello, my name is " + this.firstName + " " + this.lastName + "and i am " + this.age + " years old");
    },
    happyBirthday: function(){
        this.age += 1;
        console.log("Happy birthday! i am now " + this.age + " years old");
    }
}