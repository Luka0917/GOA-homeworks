//* stack-ი არის მონაცემთა სტრუქტურა სადაც მხოლოდ ბოლო ელემენტის ამოღება შეგვიძლია და ასევე ელემენტის ბოლოს დამატება


//* stack-ი იმიტომ არის იმპლემენტირებული ანდურიდუსთან რომ, როდესაც page-ზე გადავალთ stack-ში შევინახავთ ამ page-ს და undo ღილაკით ამოვიღებთ ბოლოს ელემენტს(page) და გამოვიტანთ საიტზე


//* stack-ს მაშინ ვიყენებთ როდესაც კოდში გვჭირდება LIFO-ს პრინციპი ---> ბოლოს დამატებული ელემენტის პირველ რიგში გამოყენება


//* stack-ში მხოლოდ ბოლო ელემენტზე შეგვიძლია წვდომა, ამოღება, დამატება
//* list-ში კი შეგვიძლია ნებისმიერ ელემენტს მივწვდეთ ნებისმიერ index-ზე, შევცვალოთ და ამოვშალოთ


class Stack {
    #stackData = [];
    constructor(stackData){
        this.#stackData = stackData;
    };
    pop(){
        this.#stackData.pop();
    };
    push(el){
        this.#stackData.push(el);
    };
    size(){
        return this.#stackData.length;
    };
    peek(){
        return this.#stackData[this.#stackData.length - 1];
    };
    clear(){
        this.#stackData = [];
    };
    isEmpty(){
        return this.#stackData.length === 0;
    };
    print(){
        if(this.isEmpty()) return 'Stack is Empty!';
        let result = [];
        for(let i = 0; i < this.#stackData.length; i++) result.push(String(this.#stackData[i]));
        return result.join(', ');
    };
};

const stack1 = new Stack([0, 1, 2, 3, 4]);
console.log(`Size: ${stack1.size()}`);
console.log(`Peek: ${stack1.peek()}`);
console.log(`IsEmpty: ${stack1.isEmpty()}`);

console.log('\nPop');
console.log(`Before: ${stack1.print()}`);
stack1.pop();
console.log(`After: ${stack1.print()}`);

console.log('\nPush');
console.log(`Before: ${stack1.print()}`);
stack1.push(6);
console.log(`After: ${stack1.print()}`);

console.log('\n    Clear');
console.log('Before:');
console.log(`  IsEmpty: ${stack1.isEmpty()}`);
console.log(`  Print: ${stack1.print()}`);

stack1.clear();

console.log('After:');
console.log(`  IsEmpty: ${stack1.isEmpty()}`);
console.log(`  Print: ${stack1.print()}\n`);


function stackFunc(el){
    el = el.split('');
    let stack = [];
    for(let i = 0; i < el.length; i++) stack.push(el[i]);
    console.log(`Stack: ${stack}`);
    while(stack.length !== 0){
        console.log(`Last Item: ${stack[stack.length - 1]}`);
        stack.pop();
    };
};
stackFunc('hello');
stackFunc('stack');


function isBalanced(el){
    let x = el.length - 1;
    if(
        (el[0] === '(' && el[x] === ')') || 
        (el[0] === '[' && el[x] === ']') || 
        (el[0] === '{' && el[x] === '}')
      ) return true;
    return false;
};
console.log(isBalanced("(a+b)"));
console.log(isBalanced("[a+b]"));
console.log(isBalanced("{a+b}"));
console.log(isBalanced("(a+b]"));
console.log(isBalanced("[a+b}"));
console.log(isBalanced("{a+b)"));


// https://leetcode.com/problems/valid-parentheses/description/

var isValid = function(s) {
    if(s.length % 2 != 0) return false;
    let stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
        }else{
            if(stack.pop() !== pairs[s[i]]) return false;
        };
    };
    return stack.length === 0;
};

//* O(n) 