class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkdeList {
    constructor(){
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    //* O(1)
    pushBack(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;    
    }

    //* O(1)
    pushFront(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;    
    }

    //* O(n)
    popBack(){
        if(!this.head) return;
        if(this.head == this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }

    //* O(1)
    popFront(){
        if(!this.head) return;
        this.head = this.head.next;
        if(!this.size){
            this.tail = null;
        }
        this.size--;
    }

    //* O(n)
    get(index){
        if(index < 0 || index >= this.size) return;
        let current = this.head;
        let i = 0;
        while(i < index){
            current = current.next;
            i++;
        }
        return current;
    }

    //* O(n)
    insert(index, value){
        if(index < 0 || index >= this.size) return;

        if(index === 0) this.pushFront(value);
        if(index === this.size) this.pushBack(value);

        const newNode = new Node(value);
        let current = this.get(index);
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
    }

    //* O(n)
    erase(index){
        if(index < 0 || index >= this.size) return;

        if(index === 0) this.popFront();
        if(index === this.size - 1) this.popBack();

        const node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;

        this.size--;
    }

    //* O(n)
    find(value){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.value === value) return index;
            current = current.next;
            index++;
        }
        return -1;
    }
    
    //* O(1)
    clear(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //* O(n)
    reverse(){
        let prev = null;
        let current = this.head;
        this.tail = this.head;
        while(current){
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        this.head = prev;
    }

    //* O(n)
    toArray(){
        let result = [];
        let current = this.head;
        while(current){
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
};