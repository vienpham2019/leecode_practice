// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Follow up:
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?
 
// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 
// Constraints:
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

var setZeroes = function(matrix) {
    if(matrix === null || matrix.length === 0 || matrix[0].length === 0) return 
    let r = matrix.length  // row 
    let c = matrix[0].length  // col  
    let zeroInRow = false 
    let zeroInCol = false 
    for(let i = 0 ; i < r ; i ++){
        if(matrix[i][0] === 0){
            zeroInRow = true 
            break 
        }
    }
    
    for(let i = 0 ; i < c ; i ++){
        if(matrix[0][i] === 0){
            zeroInCol = true 
            break 
        }
    }
    
    for(let i = 1 ; i < r ; i ++){
        for(let j = 1 ; j < c ; j ++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0 
                matrix[0][j] = 0 
            }
        }
    }
    
     for(let i = 1 ; i < r ; i ++){
        for(let j = 1 ; j < c ; j ++){
            if(matrix[0][j] === 0 || matrix[i][0] === 0){
                matrix[i][j] = 0 
            }
        }
    }
    
    if(zeroInRow){
        for(let i = 0 ; i < r ; i ++){
            matrix[i][0] = 0
        }
    }
    
    if(zeroInCol){
        for(let i = 0 ; i < c ; i ++){
            matrix[0][i] = 0 
        }
    }
    
    return matrix 
};

let matrix = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]
console.log(setZeroes(matrix))