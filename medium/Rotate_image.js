// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 
// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Example 2:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Example 3:
// Input: matrix = [[1]]
// Output: [[1]]

// Example 4:
// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]
 

// Constraints:
// matrix.length == n
// matrix[i].length == n
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

var rotate = function(matrix) {
    let lo = 0 
    let hi = matrix.length - 1
    while(lo < hi){
        let length = hi - lo
        for(let i = 0 ; i < length ; i ++){
            let index = lo + i 
            swap(matrix , lo, index , lo + i , hi)
            swap(matrix , lo , index , hi , hi - i)
            swap(matrix , lo , index , hi - i , lo)
        }
        lo ++ 
        hi -- 
    }

    return matrix 
};

let swap = (matrix , row1 , col1, row2 , col2) => { // matrix[row][col]
    let temp = matrix[row1][col1]
    matrix[row1][col1] = matrix[row2][col2]
    matrix[row2][col2] = temp
}

let matrix = [
    [5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]
]

rotate(matrix).forEach(element => {
    console.log(element)
});