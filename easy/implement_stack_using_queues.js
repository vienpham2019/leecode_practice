// Implement the following operations of a stack using queues.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// empty() -- Return whether the stack is empty.
// Example:

// MyStack stack = new MyStack();
// stack.push(1);
// stack.push(2);  
// stack.top();   // returns 2
// stack.pop();   // returns 2
// stack.empty(); // returns false

// Notes:
// You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
// Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
// You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).

const MyStack = () => {
    this.queue = new Queue()
}

MyStack.prototype.push = (x) => {
    let rotations = this.queue.size()

    this.queue.enqueue(x)

    while(rotations > 0){
        this.queue.enqueue(this.queue.dequeue())
        rotations -- 
    }
}

MyStack.prototype.pop = () => {
    return this.queue.dequeue()
}

MyStack.prototype.top = () => {
    return this.queue.peek()
}

MyStack.prototype.empty = () => {
    return this.queue.isEmpty()
}

class Queues {
    constructor(){
        this.top = 0 
        this.bottom = 0 
        this.storage = {}
    }

    enqueue(val){
        this.storage[this.top] = val 
        this.top ++ 
    }

    dequeue(){
        let remove_element = this.store[this.bottom]
        delete this.storage[this.bottom]
        this.bottom ++
        return remove_element
    }

    size() {
        return this.top - this.bottom 
    }

    peek(){
        return this.storage[this.bottom]
    }

    isEmpty(){
        return this.size() === 0
    }
}



