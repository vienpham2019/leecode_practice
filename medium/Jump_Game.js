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

//  0 1 2 3 4
// [3,2,1,4,4]
//          I
// Most left index start at the last 
// start pointer at second end 
// if the pointer index + it value greaterthan or equal to the most left index if it true update most left index to the pointer index and move the pointer index down by one 

// else if it the sum of index and it value is not >= most left index than skip 

// at the end if the most left index at === 0 is mean at the begin than we find a path 


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