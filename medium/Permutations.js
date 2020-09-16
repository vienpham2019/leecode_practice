// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

const permute = nums => {
    let A = new Array(nums.length).fill(0)
    let res = []
    const pem = (nums , A , res , k , permutations) => {
        if(nums[k] === undefined){
            permutations.push(res.slice())
            return 
        }

        for(let i = 0 ; i < A.length ; i ++){
            if(A[i] === 0){
                res[k] = nums[i]
                A[i] = 1 
                pem(nums , A , res , k + 1 , permutations)
                A[i] = 0 
            }
        }

        return permutations 
    }
    return pem(nums , A , res , 0 , [])
}

console.log(permute([1,2,3,4]))