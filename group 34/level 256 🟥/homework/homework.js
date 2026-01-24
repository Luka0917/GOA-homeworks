class CircularQueue{
    constructor(capacity){
        this.capacity = capacity;
        this.queue = new Array(capacity);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    //* O(1)
    enqueue(value){
        if(this.isFull()){
            console.log('Queue is Full!');
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.size++;
    }

    //* O(1)
    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is Empty!');
        }
        const removed = this.queue[this.front];
        this.queue[this.front] = undefined;

        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return removed;
    }

    //* O(1)
    isFull(){
        return this.size === this.capacity;
    }

    //* O(1)
    isEmpty(){
        return this.size === 0;
    }

    //* O(1)
    peek(){
        if(this.isEmpty()) return null;
        return this.queue[this.front];
    }

    //* O(n)
    print(){
        let result = [];
        for(let i = 0; i < this.size; i++){
            result.push(this.queue[(this.front + i) % this.capacity]);
        }
        console.log(result.join(' '));
    }
}