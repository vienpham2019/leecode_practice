// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

const spiralOrder = matrix => {
   let result = []
   if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return result;
   let begin_row = 0 
   let end_row = matrix.length - 1
   let begin_col = 0 
   let end_col = matrix[0].length - 1

   while(begin_row <= end_row && begin_col <= end_col){
        for(let i = begin_col ; i <= end_col ; i ++){
            result.push(matrix[begin_row][i])
        }
        begin_row ++
        for(let i = begin_row ; i <= end_row ; i ++){
            result.push(matrix[i][end_col])
        }
        end_col -- 
        if(begin_row <= end_row){
            for(let i = end_col ; i >= begin_col ; i --){
                result.push(matrix[end_row][i])
            }
            end_row -- 
        }
        if(begin_col <= end_col){
            for(let i = end_row ; i >= begin_row ; i --){
                result.push(matrix[i][begin_col])
            }
            begin_col ++ 
        }
   }
   return result 
}

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]))