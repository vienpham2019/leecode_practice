// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

const canJump = nums => {
    let p = nums.length - 2 
    let most_left = p + 1

    while(p >= 0){
        if((nums[p] + p) >= most_left){
            most_left = p 
        }
        p -- 
    }

    return most_left === 0 
}

console.log(canJump([2,0,0]))