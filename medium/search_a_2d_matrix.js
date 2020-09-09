// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:
// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true

// Example 2:
// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false

// O(log(mn)) solution 

// const searchMatrix = (matrix , target) => {
//     if(matrix.length === 0) return false 
//     let cols = matrix[0].length 
//     let rows = matrix.length 

//     let left = 0 
//     let right = (cols * rows) - 1

//     while(left <= right) {
//         let mid = Math.floor((left + right) / 2)
//         let mid_val = get_val(matrix , mid , cols)
//         if(mid_val === target) return true 
//         if(mid_val > target){
//             right = mid - 1
//         }else{
//             left = mid + 1
//         }
//     }

//     return false 
// }

// const get_val = (matrix , index , cols) => {
//     let row = Math.floor(index / cols)
//     let col = index % cols 
//     return matrix[row][col]
// }

// O(n + m)

const searchMatrix = (matrix , target) => {
    if(matrix.length === 0) return 0 
    let cols = matrix[0].length 
    let rows = matrix.length 
    let s_col = cols - 1 
    let s_row = 0

    while(s_col >= 0 && s_row < rows){
        let curr_val = matrix[s_row][s_col]
        if(curr_val === target) return true 
        if(curr_val > target){
            s_col -- 
        }else{
            s_row ++ 
        }
    }

    return false 
}

let matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ]

console.log(searchMatrix(matrix , 1))