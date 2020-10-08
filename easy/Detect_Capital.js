// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.
 
// Example 1:
// Input: "USA"
// Output: True
 
// Example 2:
// Input: "FlaG"
// Output: False
 
// Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters

// EX: 
// AAAAAB ==> TRUE 
// aaaaaab ==> TRUE 
// Aaaaab ==> TRUE 
// AAbbA ==> FALSE

const detectCapitalUse = word => {
    let len = word.length 
    if(len < 2) return true 
    if(isUpper(word[0]) && isUpper(word[1])){
        for(let i = 2 ; i < len ; i ++)
            if(isLower(word[i])) return false 
    }else{
        for(let i = 1 ; i < len ; i ++)
            if(isUpper(word[i])) return false 
    }

    return true 
}

const isUpper = w => w === w.toUpperCase()
const isLower = w => w === w.toLowerCase()

console.log(detectCapitalUse('AAAAABB'))