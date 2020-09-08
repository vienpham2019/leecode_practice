// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:
// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

const binaryTreePaths = root => {
    let result = []
    if(root === null) return result 
    let current_path = `${root.val}`

    if(!root.left && !root.right) return [current_path]
    if(root.left) findPath(root.left , current_path , result)
    if(root.right) findPath(root.right , current_path , result)

    return result 
}

const findPath = (node , current_path , result) => {
    current_path += `->${node.val}`

    if(!node.left && !node.right){
        result.push(current_path)
        return 
    }
    if(node.left) findPath(node.left , current_path , result)
    if(node.right) findPath(node.right , current_path , result)
}