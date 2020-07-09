// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a - b)
    let answer = nums[0] + nums[1] + nums[nums.length - 1]

    for(let i = 0 ; i < nums.length - 2 ; i++){
        let a_pointer = i + 1
        let b_pointer = nums.length - 1 
        while(a_pointer < b_pointer){
            let current_sum  = nums[i] + nums[a_pointer] + nums[b_pointer]
            if(current_sum > target){
                b_pointer -- 
            }else{
                a_pointer ++ 
            }

            if(Math.abs(current_sum - target) < Math.abs(answer - target)){
                answer = current_sum
            }
        }
    } 

    return answer
};

console.log(threeSumClosest([-1,2,1,-4] , 1))