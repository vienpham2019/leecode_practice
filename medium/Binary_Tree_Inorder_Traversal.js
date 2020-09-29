// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Example 4: 
// Input: root = [1,2]
// Output: [2,1]

// Example 5:
// Input: root = [1,null,2]
// Output: [1,2]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

class TreeNode {
    constructor(val , left = null , right = null){
        this.val = val 
        this.left = left 
        this.right = right 
    }
}

const create_tree = array => {
    let root = new TreeNode(array[0])
    let curr_index = 1 
    let queue = new Queue()
    queue.enqueue(root)
    
    while(curr_index < array.length){
        let curr_node = queue.dequeue()
        
        let left = array[curr_index] ? new TreeNode(array[curr_index]) : null 
        curr_index ++ 
        if(left !== null) queue.enqueue(left)
        curr_node.left = left 
        let right = array[curr_index] ? new TreeNode(array[curr_index]) : null 
        curr_index ++ 
        if(right !== null ) queue.enqueue(right)
        curr_node.right = right
    }

    return root 

}

class Queue {
    constructor(){
        this.store = {}
        this.first = 0 
        this.last = 0 
    }

    enqueue(val){
        this.store[this.last] = val 
        this.last ++ 
    }

    dequeue(){
        let remove_element = this.store[this.first] 
        delete this.store[this.first]
        this.first ++ 
        return remove_element 
    }

    size(){
        return this.last - this.first 
    }

    isEmpty(){
        return this.size() === 0 
    }

    peek(){
        return this.store[this.first]
    }
}

let nums = [1,null,2,3]
let root = create_tree(nums)

const inorderTaversal = root => {
    let result = []
    let stack = []
    let node = root
    while(true){
        if(node !== null){
            stack.push(node)
            node = node.left
        }else{
            if(stack.length === 0) break 
            node = stack.pop()
            result.push(node.val)
            node = node.right
        }
    }
    return result 
}

console.log(inorderTaversal(root))