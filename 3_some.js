//Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {
    if(nums.length < 3) return []
    nums = nums.sort((a, b) => a - b)
    let i = 0 
    let current = 0 
    let left = 1 
    let right =  nums.length - 1 
    let answer = []

    while(i < nums.length){
        if(nums[current] === nums[i + 1]){
            i ++
        }else{
            if(left > right || left === right){
                i++
                current = i
                left = i + 1
                right = nums.length - 1
            }
            let sum = nums[current] + nums[left] + nums[right]
            if(sum === 0){
                let next_3_sum = [nums[current] , nums[left], nums[right]]
                if(!answer.find(a => a.join('') === next_3_sum.join(''))){
                    answer.push(next_3_sum)
                }
                left ++ 
                right -- 
            }else if(sum > 0){
                right -- 
            }else{
                left ++
            }

            if(left > right || left === right){
                i++
                current = i
                left = i + 1
                right = nums.length - 1
            }
        }
    }

    return answer
};
console.log(threeSum([-2,-3,0,0,-2]))