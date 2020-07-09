// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

var fourSum = function(nums, target) {
    nums = nums.sort((a,b) => a - b)
    let answer = []
    for(let i = 0; i < nums.length - 3 ; i ++ ){
        if(i === 0 || i > 0 && nums[i] !== nums[i - 1]){
            for(let j = i + 1; j < nums.length - 2; j ++ ){
                if(j === i + 1 || j > i + 1 && nums[j] !== nums[j - 1]){
                    let a_p = j + 1
                    let b_p = nums.length - 1 
                    while(a_p < b_p){
                        let sum = nums[i] + nums[j] + nums[a_p] + nums[b_p]
                        if(sum === target){
                            answer.push([nums[i] , nums[j] , nums[a_p] , nums[b_p]])
                            while(a_p < b_p && nums[a_p] === nums[a_p + 1]) a_p ++  
                            while(a_p < b_p && nums[b_p] === nums[b_p - 1]) b_p --  
                            a_p ++ 
                            b_p -- 
                        }else if(sum > target){
                            b_p -- 
                        }else{
                            a_p ++ 
                        }
                    }
                }
            }
        }
    } 

    return answer
};

console.log(fourSum([-1,0,1,2,-1,-4] , -1))