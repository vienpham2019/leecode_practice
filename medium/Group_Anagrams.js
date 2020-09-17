// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lower-case English letters.

const group_anagrams = strs => {
    if(strs.length <= 1) return strs 
    let result = {}
    for(let i = 0 ; i < strs.length ; i ++){
        let letters = new Array(26).fill(0)
        for(let j = 0 ; j < strs[i].length ; j ++){
            let index = strs[i].charCodeAt(j) - 97 
            letters[index] += 1 
        }
        let key = letters.join('')
        if(result[key]){
            result[key].push(strs[i])
        }else{
            result[key] = [strs[i]]
        }
    }

    return Object.values(result)
}

console.log(group_anagrams(["eat","tea","tan","ate","nat","bat"]))