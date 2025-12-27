//! singly linked list

//^ pushBack, pushFront, popBack, popFront, get(index), insert(index, value), erase(index), find(value), clear(), reverse(), toArray()


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkdeList {
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
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    //* O(1)
    pushFront(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        if(!this.tail){
            this.tail = newNode;
        }
        this.size++;
    }

    //* O(n)
    popBack(){
        if(!this.head) return;
        if(this.head == this.tail){
            this.head = null;
            this.tail = null;
        }
        let current = this.head;

        while(current.next != this.tail){
            current = current.next;
        }
        current.next = null;
        this.tail = current;
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

        const newNode = Node(value);
        let current = this.head;
        let i = 0;
        while(i < index-1){
            current = current.next;
            i++;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    //* O(n)
    erase(index){
        if(index < 0 || index >= this.size) return;

        if(index === 0) this.popFront();

        let current = this.head;
        let i = 0;
        while(i < index-1){
            current = current.next;
            i++
        }
        current.next = current.next.next;
        if(index === this.size - 1) this.tail = current;
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


// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

var deleteDuplicates = function(head){
    let current = head;
    while(current && current.next){
        if(current.val === current.next.val) current.next = current.next.next;
        else current = current.next;
    }
    return head
};


function deleteDuplicates2(list){
    if(!list.head) return;
    let current = list.head;
    let i = 0;
    while(current && current.next){
        if(current.value === current.next.value) list.erase(i + 1);
        else{
            current = current.next;
            i++;
        }
    }
    return list.head;
}

let list = new LinkdeList();
list.pushBack(1);
list.pushBack(1);
list.pushBack(2);
list.pushBack(3);
list.pushBack(3);
deleteDuplicates2(list);
console.log(list.toArray());