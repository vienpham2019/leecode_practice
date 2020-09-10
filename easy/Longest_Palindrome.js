// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1

// Example 3:
// Input: s = "bb"
// Output: 2

const longestPalindrome = s => {
    let char_count = {}
    let result = 0 
    for(let letter of s) {
        if(char_count[letter]){
            char_count[letter] ++
            if(char_count[letter] % 2 === 0) result += 2
        }else{
            char_count[letter] = 1 
        }
    }

    if(result < s.length) result ++
    return result
}

console.log(longestPalindrome("abccccdd"))