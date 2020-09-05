// Given an integer n, return the number of trailing zeroes in n!.

// Example 1:
// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:
// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// 5! = 1 x 2 x 3 x 4 x 5 = 120 => it have 1 number five 5 = 5 * 1
// 10! = 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8 x 9 x 10 => it have 2 number five 5 = 5 * 1 and 10 = 5 * 2
// 26! = 1 x ... x 5 x ... x 10 x ... x 15 x ... x 20 x ... x 25 => it have 6 number five 5 = 5 * 1, 10 = 5 * 2 , 15 = 5 x 3 , 20 = 5 x 4 and 25 = 5 x 5

const trailingZeroes = n => {
    let result = 0 
    while(n >= 5){
        result += Math.floor(n / 5)
        n = Math.floor(n / 5)
    }

    return result
}

console.log(trailingZeroes(100))