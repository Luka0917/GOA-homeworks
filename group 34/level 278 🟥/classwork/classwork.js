class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value);
        if(!this.root){ this.root = node; return; }
        let current = this.root;
        while(current){
            if(value < current.value){
                if(!current.left){ current.left = node; return; }
                current = current.left;
            }else{
                if(!current.right){ current.right = node; return; }
                current = current.right;
            }
        }
    }

    read(){
        const result = [];
        const stack = [];
        let current = this.root;
        while(current || stack.length){
            while(current){
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            result.push(current.value);
            current = current.right;
        }
        return result;
    }
}

const bst = new BinarySearchTree();
[10, 4, 15, 1, 7].forEach(el => bst.insert(el));

console.log(bst.read());