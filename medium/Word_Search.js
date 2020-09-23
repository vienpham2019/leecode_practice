// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
 
// Constraints:
// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

const exist = (board , word) => {
    for(let r = 0 ; r < board.length ; r ++){
        for(let c = 0 ; c < board[r].length ; c ++){
            if(board[r][c] === word.charAt(0) && dfs(board , r , c , 0 , word)) return true 
        }
    }

    return false 
}

const dfs = (board , r , c , count , word) => {
    if(count === word.length) return true
    if(r < 0 || !board[r] || c < 0 || !board[r][c] || board[r][c] !== word.charAt(count)) return false 

    let temp = board[r][c] 
    board[r][c] = "$"
    let match = 
        dfs(board , r - 1 , c , count + 1 , word) ||
        dfs(board , r + 1 , c , count + 1 , word) || 
        dfs(board , r , c  + 1, count + 1 , word) || 
        dfs(board , r , c - 1, count + 1 , word)

    board[r][c] = temp

    return match 
} 

let board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

console.log(exist(board , 'ABCB'))