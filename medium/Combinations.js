// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// You may return the answer in any order.

// Example 1:
// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// Example 2:
// Input: n = 1, k = 1
// Output: [[1]]

const combine = (n , k) => {
    const get_combination = (num , n , k, com , result ) => {
        if(com.length === k) {
            result.push(com.slice())
            return 
        }

        if(num <= n){
            com.push(num)
            get_combination(num + 1 , n, k , com , result )
            com.pop()
            get_combination(num + 1 , n , k , com , result)
        }

        return result 
    }

    return get_combination(1 , n , k , [] , [])
}

console.log(combine(1 , 2))