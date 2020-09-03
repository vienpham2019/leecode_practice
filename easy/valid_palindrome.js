// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

const isPalindrome = (s) => {
    let p_1 = 0
    let p_2 = s.length - 1 
    while(p_1 < p_2){
        while(!isCharacter(s[p_1])) p_1 ++
        while(!isCharacter(s[p_2])) p_2 --

        if(p_1 > p_2 || s[p_1].toLowerCase() !== s[p_2].toLowerCase()) return false 
        p_1 ++ 
        p_2 --
    }

    return true 
}

const isCharacter = c => !!`${c}`.match(/[a-zA-Z0-9]/)

console.log(isPalindrome('.,'))