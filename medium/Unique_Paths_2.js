// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.
// Note: m and n will be at most 100.

// Example 1:
// Input:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// Output: 2
// Explanation:
// There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

// recursive 
// var uniquePathsWithObstacles = (obstacleGrid) => {
//     let n = obstacleGrid[0].length 
//     let m = obstacleGrid.length 
//     const find_path = (n , m , x , y , map , grid) => {
//         if(x === n || y === m || grid[y][x] === 1) return 0 
//         if(x === n - 1 && y === m - 1) return 1 
//         if(!map[`${x},${y}`]){
//             map[`${x},${y}`] = 
//                 find_path(n , m , x , y + 1 , map , grid) + 
//                 find_path(n , m , x + 1, y , map , grid) 
//         }

//         return map[`${x},${y}`]
//     }
//     return find_path(n , m , 0 , 0 , {} , obstacleGrid)
// }

const uniquePathsWithObstacles = grid => {
    let n = grid[0].length 
    let m = grid.length 
    if(grid[0][0] === 1) return 0 
    grid[0][0] = 1 
    for(let i = 1 ; i < n ; i ++){
        if(grid[0][i] === 1){
            grid[0][i] = 0 
        }else{
            grid[0][i] += grid[0][i - 1]
        }
    }

    for(let i = 1 ; i < m ; i ++){
        if(grid[i][0] === 1){
            grid[i][0] = 0 
        }else{
            grid[i][0] += grid[i - 1][0]
        }
    }

    for(let i = 1 ; i < m ; i ++ ){
        for(let j = 1 ; j < n ; j ++){
            if(grid[i][j] === 1){
                grid[i][j] = 0 
            }else{
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
            }
        }
    }

    return grid[m - 1][n - 1]
}

let grid = [
    [0,0,1,0],
    [0,0,0,0],
    [1,1,1,0],
    [0,0,1,0]
]

console.log(uniquePathsWithObstacles(grid))