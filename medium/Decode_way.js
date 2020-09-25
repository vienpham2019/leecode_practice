// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26

// Given a non-empty string containing only digits, determine the total number of ways to decode it.
// Example 1:
// Input: "12"

// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).

// Example 2:
// Input: "226"

// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// input : [ 1 | 2 | 1 | 2 | 1 | 2 ] 
// output: [ 1 | 2 | 3 | 5 | 8 | 13 ]

// Case1:  number of i and i - 1 between 10 and 26: 
//     ways[i] = ways[i - 1] + ways[i - 2]
// Case2: number of i and i - 1 larger than 26: 
//     ways[i] = ways[i - 1]
// Case3: number of i === 0 and i - 1 === 1 of i - 1 === 2: 
//     ways[i] =  ways[i - 2]
// Case4: number of i === 0 and i - 1 > 2 : 
//     stop and return 0 


const numDecodings = s => {
    let result = []
    result[0] = 1
    result[1] = s[0] === '0' ? 0 : 1
    for(let i = 2 ; i <= s.length ; i ++){
        result[i] = 0
        let one_num = s[i - 1] - '0'
        let two_num = s[i - 2] + one_num - '0'
        if(one_num > 0) result[i] += result[i - 1]
        if(two_num >= 10 && two_num <= 26) result[i] += result[i - 2]
    }
    return result[s.length]
}

console.log(numDecodings('122214'))