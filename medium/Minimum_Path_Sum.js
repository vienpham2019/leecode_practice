// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

const minPathSum = (grid) => {
    let n = grid[0].length 
    let m = grid.length
    if(m === 0) return 0    

    for(let i = 1 ; i < n ; i ++){
        grid[0][i] += grid[0][i - 1]
    }

    for(let i = 1 ; i < m ; i ++){
        grid[i][0] += grid[i - 1][0]
    }

    for(let i = 1 ; i < m ; i ++){
        for(let j = 1 ; j < n ; j ++){
            grid[i][j] += Math.min(grid[i - 1][j] , grid[i][j - 1])
        }
    }

    return grid[m - 1][n - 1]
}

let grid = [[1,2,3],[4,5,6]]

console.log(minPathSum(grid))