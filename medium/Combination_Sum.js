// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]

// Example 2:
// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]
 
// Constraints:
// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// Each element of candidate is unique.
// 1 <= target <= 50 

const combinationSum = (candidates , target) => {
    return get_combination(candidates , target , 0 , [] , [])
}

const get_combination = (candidates , sum , index , cur , combinations) => {
    if(sum <= 0 ){
        if(sum === 0) combinations.push(cur.slice())
        return 
    }

    if(index < candidates.length){
        let value = candidates[index]
        cur.push(value)
        get_combination(candidates , sum - value, index , cur , combinations)
        cur.pop()
        get_combination(candidates , sum , index + 1 , cur , combinations)
    }

    return combinations
}

console.log(combinationSum([10,1,2,7,6,1,5] , 8))