// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:
// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

const subsetWithDup = nums => {
    let result = []
    if(nums === null || nums.length === 0) return result 
    nums = nums.sort()

    return find_subset(nums , result , [] , 0)
}

const find_subset = (nums , result , subset , startIndex) => {
    result.push(subset.slice())

    for(let i = startIndex ; i < nums.length ; i ++){
        if(i !== startIndex && nums[i] === nums[i - 1]) continue 
        subset.push(nums[i])
        find_subset(nums , result , subset , i + 1)
        subset.pop()
    }

    return result 
}

let nums = [1,2,2]

console.log(subsetWithDup(nums))