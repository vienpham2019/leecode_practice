// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

const generate = numRows => {
    let triangle = []
    if(numRows === 0) return triangle 

    triangle.push([1])

    for(let i = 1 ; i < numRows ; i ++){
        let prev_row = triangle[i - 1]
        let new_row = [1]
        for(let j = 0 ; j < prev_row.length - 1 ; j ++){
            new_row.push(prev_row[j] + prev_row[j + 1])
        }
        triangle.push([...new_row , 1])
    }

    return triangle
}

console.log(generate(5))