// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:
// All given inputs are in lowercase letters a-z.

const longestCommonPrefix = strs => {
    let result = ''
    if(strs.length === 0) return result 
    
    let compare_w = strs[0]
    let compare_i = 0 
    for(let letter of compare_w){
        for(let i = 1 ; i < strs.length ; i ++){
            if(strs[i][compare_i] !== letter) return result 
        }
        compare_i ++ 
        result += letter 
    }
    return result 
}

console.log(longestCommonPrefix(["flower","flow","flight"]))