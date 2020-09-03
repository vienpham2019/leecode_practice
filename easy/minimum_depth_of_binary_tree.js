// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3  
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

const minDepth = root => {
    if(root === null ) return 0 

    let queue = []
    queue.push(root)
    let depth = 0

    while(queue.length){
        let current_length = queue.length
        while(current_length) {
            let current_node = queue.shift()
            let {left , right} = current_node 
            if(left === null && right === null){
                return depth + 1
            }

            if(left) queue.push(left)
            if(right) queue.push(right)
            current_length -- 
        }
        depth ++ 
    }
}