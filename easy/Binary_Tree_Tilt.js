// Given a binary tree, return the tilt of the whole tree.

// The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

// The tilt of the whole tree is defined as the sum of all nodes' tilt.

// Example:
// Input: 
//          1
//        /   \
//       2     3
// Output: 1
// Explanation: 
// Tilt of node 2 : 0
// Tilt of node 3 : 0
// Tilt of node 1 : |2-3| = 1
// Tilt of binary tree : 0 + 0 + 1 = 1

//      3
//    /   \
//   2     4
//  / \   / \
// 3   1  6  5 

// tilt += | sum of left - sum of right |

const findTilt = root => {
    this.tilt = 0 
    const depth = node => {
        if(node === null) return 0 
        let left = depth(node.left)
        let right = depth(node.right)

        this.tilt += Math.abs(left - right)
        return left + right + node.val
    }
    depth(root)
    return this.tilt 
}

class treeNode {
    constructor(val , left = null , right = null){
        this.val = val 
        this.left = left 
        this.right = right 
    }
}

const createTree = array => {
    let root = new treeNode(array[0])
    let queue = [root] 
    let i = 1 
    while(i < array.length){
        let curr = queue.shift()
        let left = array[i] ? new treeNode(array[i++]) : null 
        let right = array[i] ? new treeNode(array[i++]) : null 
        curr.left = left 
        curr.right = right 
        queue = [...queue, left , right]
    }
    return root 
}
let array = [3,2,4,3,1,6,5]
console.log(findTilt(createTree(array)))
