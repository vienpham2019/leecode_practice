// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

const merge = (nums1 , m , nums2 , n) => {
    let first_index = m - 1 
    let second_index = n - 1
    for(let i = nums1.length - 1 ; i >= 0 ; i --){
        if(second_index < 0) break

        if(nums1[first_index] > nums2[second_index]){
            nums1[i] = nums1[first_index]
            first_index --
        } else {
            nums1[i] = nums2[second_index]
            second_index -- 
        }
    }

    return nums1
}

console.log(merge([2,5,6,0,0,0] , 3 , [1,2,3] , 3))