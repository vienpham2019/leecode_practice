// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

var MinStack = function() {
    this.stack = new Stack()
    this.min_stack = new Stack()
};

MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if(this.min_stack.isEmpty()){
        this.min_stack.push(x)
    }else if(x < this.min_stack.peek()){
        this.min_stack.push(x)
    }
};

MinStack.prototype.pop = function() {
    let remove_item = this.stack.pop()
    if(remove_item === this.min_stack.peek()){
        this.min_stack.pop()
    }
};

MinStack.prototype.top = function() {
    return this.stack.peek()
};


MinStack.prototype.getMin = function() {
    return this.min_stack.peek()
};


class Stack {
    constructor(){
        this.store = []
        this.count = 0
    }

    push(element){
        this.store[this.count] = element
        this.count ++ 
        return this.count 
    }

    pop(){
        if(this.count === 0) return 
        let remove_element = this.store[this.count - 1]
        this.count -- 
        return remove_element 
    }

    peek(){
        return this.store[this.count - 1]
    }

    isEmpty(){
        return this.count === 0
    }

    getSize(){
        return this.count 
    }

    print(){
        let str = ''
        for(let i = 0 ; i < this.count ; i ++){
            str += this.store[i] + ' '
        }

        return str
    }

    clear(){
        this.store = []
        this.count = 0
        return this.store
    }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2

