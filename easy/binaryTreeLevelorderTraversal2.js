// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */

const levelOrderBottom = (root) => {
    let result = []
    if(root === null) return result 
    
    let queue = []
    queue.push(root)
    while(queue.length){
        let current_length = queue.length
        let leaf = []
        while(current_length){
            let current_node = queue.shift()
            let {left , right} = current_node
            if(left) queue.push(left)
            if(right) queue.push(right)

            leaf.push(current_node.val)
            current_length -- 
        }
        result.unshift(leaf)
    }

    return result
}