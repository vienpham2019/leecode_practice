// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

const climbStairs = (n) => {
    const countStep = (remainStairs , resultMap) => {
        if(remainStairs < 0) return 0    // if remainStair is off the stairs is === -1 then return 0 
        if(remainStairs === 0) return 1  // if the remainStair is at target is mean no more remain stairs left than return 1 posible solution 
        if(resultMap[remainStairs]) return resultMap[remainStairs]  // if the remain has been calculate in the result map then return that answer
 
        resultMap[remainStairs] =   // this is calculate the remain stair if it not in the resultMap
            countStep(remainStairs - 1 , resultMap) +  // calculate if is posible to take 1 more step it will return back 1 , 0 or result already been calculate
            countStep(remainStairs - 2 , resultMap)  // calculate if is posible to take 2 more step. 

        return resultMap[remainStairs]
    }

    return countStep(n , {})
}

console.log(climbStairs(10))