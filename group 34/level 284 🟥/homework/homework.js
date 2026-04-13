class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(value = null){
        this.root = value === null ? null : new Node(value);
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        this._insertNode(this.root, newNode);
        return this;
    }
    _insertNode(currentNode, newNode){
        if(newNode.value < currentNode.value){
            if(!currentNode.left) return currentNode.left = newNode;
            this._insertNode(currentNode.left, newNode);
        }else{
            if(!currentNode.right) return currentNode.right = newNode;
            this._insertNode(currentNode.right, newNode);
        }
    }

    delete(value){
        if(!this.root) return this;
        this.root = this._delete(this.root, value);
        return this;
    }
    _delete(currentNode, value){
        if(!currentNode) return null;

        if(value < currentNode.value){
            currentNode.left = this._delete(currentNode.left, value);
            return currentNode;
        }
        if(value > currentNode.value){
            currentNode.right = this._delete(currentNode.right, value);
            return currentNode;
        }

        if(!currentNode.left && !currentNode.right) return null;
        if(!currentNode.left) return currentNode.right;
        if(!currentNode.right) return currentNode.left;

        currentNode.value = this.min(currentNode.right);
        currentNode.right = this._delete(currentNode.right, currentNode.value);
        return currentNode;
    }

    min(node = this.root){
        if(!node.left) return node.value;
        return this.min(node.left);
    }
    max(node = this.root){
        if(!node.right) return node.value;
        return this.max(node.right);
    }

    inOrder(node = this.root, result = []){
        if(!node) return result;
        this.inOrder(node.left, result);
        result.push(node.value);
        this.inOrder(node.right, result);
        return result;
    }

    preOrder(node = this.root, result = []){
        if(!node) return result;
        result.push(node.value);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
        return result;
    }

    postOrder(node = this.root, result = []){
        if(!node) return result;
        this.postOrder(node.left, result);
        this.postOrder(node.right, result);
        result.push(node.value);
        return result;
    }

    levelOrder(){
        if(!this.root) return [];
        const result = [];
        const queue = [this.root];
        while(queue.length){
            const node = queue.shift();
            result.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return result;
    }
}

const bst = new BinarySearchTree(10);
bst.insert(5).insert(15).insert(3).insert(7);

console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());