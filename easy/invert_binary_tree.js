// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

const invertTree = root => {
    if(root === null) return root 
    let { left , right } = root 
    root.left = invertTree(right)
    root.right = invertTree(left)
    return root
}
