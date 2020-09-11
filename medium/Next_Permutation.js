// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1


var nextPermutation = function(nums) {
    let inverse_point = nums.length - 2 
    
    while(inverse_point > 0 && nums[inverse_point] >= nums[inverse_point + 1]){
        inverse_point --
    }
    
    if(inverse_point < 0) return []
    
    for(let i = nums.length - 1 ; i > inverse_point ; i --){
        if(nums[i] > nums[inverse_point]){
            let temp = nums[inverse_point]
            nums[inverse_point] = nums[i]
            nums[i] = temp 
            inverse_point ++ 
            break
        }
    }
    
    let p_1 = inverse_point
    let p_2 = nums.length - 1
    
    while(p_1 < p_2) {
        let temp = nums[p_1]
        nums[p_1] = nums[p_2]
        nums[p_2] = temp 
        p_1 ++ 
        p_2 -- 
    }
    
    return nums
};

console.log(nextPermutation([3,2,1]))