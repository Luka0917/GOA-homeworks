class Node{
    constructor(value){
        this.value = value,
        this.left = null,
        this.right = null
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
}