// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {number[]} nums
//  * @return {TreeNode}
//  */

class TreeNode {
    constructor(val = 0, left , right){
        this.val = val 
        this.left = left 
        this.right = right 
    }
}

const sortedArraytoBST = nums => {
    const converToBST = (list , start , end) => {
        if(start > end ) return 

        let mid = Math.ceil((start + end ) / 2)
        let root = new TreeNode(list[mid])

        root.left = converToBST(list , start , mid - 1)
        root.right = converToBST(list , mid + 1 , end)

        return root
    }

    return converToBST(nums , 0 , nums.length - 1)
}

console.log(sortedArraytoBST([-10 , -3 , 0 , 5 , 9]))