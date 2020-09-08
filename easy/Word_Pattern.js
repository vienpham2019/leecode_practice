// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:
// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true

// Example 2:
// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false

// Example 4:
// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false

// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

const wordPattern = (pattern , str) => {
    str = str.split(' ')
    if(pattern.length !== str.length) return false 

    let pattern_hash = {}
    let str_hash = {}

    for(let i = 0; i < pattern.length ; i ++){
        if(pattern_hash[pattern[i]] === undefined) pattern_hash[pattern[i]] = i 
        if(str_hash[str[i]] === undefined) str_hash[str[i]] = i 

        if(str_hash[str[i]] !== pattern_hash[pattern[i]]) return false 
    }

    return true 
}

console.log(wordPattern('aaaa' , 'cat cat dog cat'))