// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

// Example 1:
// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.

// Example 2:
// Input: "aba"
// Output: False

// Example 3:
// Input: "abcabcabcabc"
// Output: True
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

const repeatedSubstringPattern = s => {
    let len = s.length 
    for(let i = Math.floor(len / 2) ; i >= 1 ; i --){
        if(len % i === 0){
            let sub_repeat = len / i
            let sub_str = s.substring(0 , i)
            let sub = ''
            for(let j = 0 ; j < sub_repeat ; j ++){
                sub += sub_str
            }
            if(sub === s) return true 
        }
    }
    return false 
}

console.log(repeatedSubstringPattern('abab'))