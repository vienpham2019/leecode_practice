// You are given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1
 

// Constraints:

// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// All values of nums are unique.
// nums is guranteed to be rotated at some pivot.
// -10^4 <= target <= 10^4

const search = (nums, target) => {
    if(nums === null || nums.length === 0) return -1 
    let left = 0 
    let right = nums.length - 1

    while(left < right){
        let mid = Math.floor((left + right) / 2)

        if(nums[mid] > nums[right]){
            left = mid + 1
        }else{
            right = mid
        }
    }

    let start = left 
    left = 0 
    right = nums.length - 1 

    if(nums[start] <= target && nums[right] >= target){
        left = start 
    }else{
        rigth = start
    }

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) return mid 

        if(nums[mid] > target){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }

    return -1
}

console.log(search([5,6,1,2,3,4] , 3))