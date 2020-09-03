// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3

// * Definition for a binary tree node.
// * function TreeNode(val, left, right) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.left = (left===undefined ? null : left)
// *     this.right = (right===undefined ? null : right)
// * }
// */

const isBalanced = root => {
    if(root === null) return true 

    const findHeight = node => {
        if(node === null) return 0 

        let left = findHeight(node.left)
        let right = findheight(node.right)

        if(left === -1 || right === -1 || Math.abs(left - right) > 1){
            return -1 
        }

        return Math.max(left , right) + 1
    }

    return findHeight(root) !== -1
}