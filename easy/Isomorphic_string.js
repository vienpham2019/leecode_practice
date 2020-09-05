// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// Note:
// You may assume both s and t have the same length.

// s = "egg"     "paper"    "bar"
// t = "add"     "title"    "foo"
//     s | t      s | t     s | t 
//     -----      -----     -----
//     e | a      p | t     b | f
//     g | d      a | i     a | o 
//                e | l     r | can't equal o because already set to a 
//                r | e 

const isIsomorphic = (s , t) => {
    let tabel_s = {}
    let tabel_t = {}

    for(let i = 0; i < s.length ; i ++){
        if(!tabel_s[s[i]]) tabel_s[s[i]] = i + 1
        if(!tabel_t[t[i]]) tabel_t[t[i]] = i + 1

        if(tabel_s[s[i]] !== tabel_t[t[i]]) return false
    }
    return true 
}

console.log(isIsomorphic('aa' , 'ab'))