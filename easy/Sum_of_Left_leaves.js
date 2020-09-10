// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

// const sumOfLeftLeaves = root => {
//     if(root === null) return 0 

//     let sum = 0 
//     if(root.left){
//         if(root.left.left === null && root.left.right === null){
//             sum += root.left.val 
//         }else{
//             sum += sumOfLeftLeaves(root.left)
//         }
//     }

//     if(root.right){
//         if(root.right.left || root.left.left){
//             sum += sumOfLeftLeaves(root.right)
//         }
//     }

//     return sum 
// }

const sumOfLeftLeaves = root => {
    if(root === null) return 0 

    let sum = 0 
    let queue = new Queue()
    queue.enqueue(root)

    while(!queue.isEmpty()){
        let curr = queue.dequeue()

        if(curr.left){
            if(curr.left.left === null && curr.left.right === null){
                sum += curr.left.val 
            }else{
                queue.enqueue(curr.left)
            }
        }

        if(curr.right){
            if(curr.right.left || curr.right.right){
                queue.enqueue(curr.right)
            }
        }
    }

    return sum 
}

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
        queue.enqueue(left)
        curr_node.left = left 
        let right = array[curr_index] ? new TreeNode(array[curr_index]) : null 
        curr_index ++ 
        queue.enqueue(right)
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

console.log(sumOfLeftLeaves(create_tree([3,10,20,null,null,15,7])))