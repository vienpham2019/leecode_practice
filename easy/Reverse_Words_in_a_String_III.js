// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

const reverseWords = s => {
    s = s.split(' ')
    for(let i = 0 ; i < s.length ; i ++){
        let reverse = ''
        for(let letter of s[i]){
            reverse = letter + reverse
        }
        s[i] = reverse
    }
    return s.join(' ')
}

console.log(reverseWords("Let's take LeetCode contest"))

