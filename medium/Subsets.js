// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:
// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

const subsets = nums => {
    let result = []
    result.push([])
    for(let i = 0 ; i < nums.length ; i ++){
        let length = result.length 
        for(let j = length - 1 ; j >= 0 ; j --){
            result.push([...result[j],nums[i]])
        }
    }

    return result
}
let nums = [1,2,3]

console.log(subsets(nums))