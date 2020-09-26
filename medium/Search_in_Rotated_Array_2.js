// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

// You are given a target value to search. If found in the array return true, otherwise return false.

// Example 1:
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true

// Example 2:
// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

// Follow up:
// This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
// Would this affect the run-time complexity? How and why?

const search = (nums, target) => {
    if(nums.length === 0 || nums === null) return false 
    let left = 0 
    let right = nums.length - 1 

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) return true 
        if(nums[mid] > nums[left]){
            if(target <= nums[left] && target >= nums[mid]){
                right = mid 
            }else{
                left = mid
            }
        }else if(nums[mid] < nums[left]){
            if(target <= nums[right] && target >= nums[mid]){
                left = mid 
            }else{
                right = mid
            }
        }else{
            left++
        }
    }

    return false 
}

console.log(search([2,5,6,0,0,1,2] , 3))