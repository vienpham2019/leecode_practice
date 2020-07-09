//Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// var threeSum = function(nums) {
//    nums = nums.sort((a,b) => a - b)
//    let answer = []

//    for(let i = 0 ; i < nums.length - 2 ; i ++){
//        if(i === 0 || i > 0 && nums[i] !== nums[i - 1]){
//         let low = i + 1 
//         let high = nums.length - 1 
//         let sum = 0 - nums[i]
//             while(low < high){
//                 if(sum === nums[low] + nums[high]){
//                     answer.push([nums[i] , nums[low] , nums[high]])
//                     while(low < high && nums[low] ===  nums[low + 1]) low ++
//                     while(low < high && nums[high] ===  nums[high - 1]) high --
//                     low ++ 
//                     high -- 
//                 }else if(nums[low] + nums[high] > sum) {
//                     high -- 
//                 }else{
//                     low ++ 
//                 }
//             }
//        }
//    }

//    return answer 
// };

const threeSum = (nums) => {
    nums = nums.sort((a,b) => a - b)
    let answer = []
    for(let i = 0; i < nums.length  - 2 ; i ++){
        if(i === 0 || i > 0 && nums[i] !== nums[i - 1]){
            let low = i + 1 
            let high = nums.length - 1
            let sum = 0 - nums[i]
            while(low < high){
                if(sum === nums[low] + nums[high]){
                    answer.push([nums[i] , nums[low] , nums[high]])
                    while(low < high && nums[low] === nums[low + 1]) low ++ 
                    while(low < high && nums[high] === nums[high - 1]) high -- 
                    low ++ 
                    high -- 
                }else if(nums[low] + nums[high] > sum){
                    high -- 
                }else{
                    low ++ 
                }
            }
        }
    }
    return answer 
}
console.log(threeSum([0,0,0]))