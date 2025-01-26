class rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    };
    get perimeter(){
        return 2 * (this.width + this.height);
    };
};

console.log(new rectangle(10, 15).perimeter);