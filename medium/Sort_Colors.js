// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Follow up:
// Could you solve this problem without using the library's sort function?
// Could you come up with a one-pass algorithm using only O(1) constant space?
 
// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// Example 3:
// Input: nums = [0]
// Output: [0]

// Example 4:
// Input: nums = [1]
// Output: [1]

// Constraints:
// n == nums.length
// 1 <= n <= 300
// nums[i] is 0, 1, or 2.

const sortColors = nums => {
    if(nums.length <= 1) return nums
    let l = 0 
    let m = 0 
    let h = nums.length - 1 
    while(m <= h){
        if(nums[m] === 0) swap(nums , l++ , m++)
        else if(nums[m] === 1) m++
        else if(nums[m] === 2) swap(nums , m , h--)
    }
    return nums 
}

const swap = (nums , a , b) => {
    let holder = nums[a]
    nums[a] = nums[b]
    nums[b] = holder
}

let nums = [2,0,2,1,1,0]

console.log(sortColors(nums))