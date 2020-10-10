// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
 

// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

class TreeNode {
    constructor(val , left = null , right = null){
        this.val = val 
        this.left = left 
        this.right = right 
    }
}

const createTree = array => {
    let root = new TreeNode(array[0])
    let queue = [root]
    let i = 1
    while(i < array.length){
        let curr = queue.shift()
        let left = array[i] ? new TreeNode(array[i ++]) : null 
        let right = array[i] ? new TreeNode(array[i ++]) : null 
        curr.left = left 
        curr.right = right 
        queue = [...queue , left , right]
    }
    return root 
}

const isSubtree = (s , t) => {
    return depth(s , t)
}

const equal = (x , y) => {
    if(x === null && y === null) return true 
    if(x === null || y === null) return false 
    return x.val === y.val && equal(x.left , y.left) && equal(x.right , y.right)
}

const depth = (s , t) => {
    return s !== null && (equal(s , t) || depth(s.left , t) || depth(s.right , t))
}

let s = createTree([3,4,5,1,2])
let t = createTree([4,1,2])
console.log(isSubtree(s , t))