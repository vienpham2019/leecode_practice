// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

const combinationSum2 = (candidates, target) => {
    candidates = candidates.sort()
    return find_combinations(candidates , target , 0 , [] , [])
}

const find_combinations = (candidates , sum , index , curr , combinations) => {
    if(sum <= 0){
        if(sum === 0) {
            if(!combinations.find(c => c.join('') === curr.slice().join(''))){
                combinations.push(curr.slice())
            }
        }
        return 
    } 

    if(index < candidates.length){
        let val = candidates[index]
        curr.push(val)
        find_combinations(candidates , sum - val , index + 1 , curr , combinations)
        curr.pop()
        find_combinations(candidates , sum , index + 1, curr , combinations)
    }

    return combinations 
}

console.log(combinationSum2([3,1,3,5,1,1] ,8))