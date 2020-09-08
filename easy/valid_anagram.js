// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.

const isAnagram = (s,t) => {
    if(s.length !== t.length) return false 
    let letterCount = {}

    for(let letter of s){
        if(letterCount[letter]){
            letterCount[letter] ++
        }else{
            letterCount[letter] = 1
        }
    }

    for(let letter of t){
        if(!letterCount[letter] || letterCount[letter] < 1) return false 
        letterCount[letter] -- 
    }
    
    return true 
}

console.log(isAnagram('anagram' , 'nagaram'))