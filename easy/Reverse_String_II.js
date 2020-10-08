// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Restrictions:
// The string consists of lower English letters only.
// Length of the given string and k will in the range [1, 10000]

const reverseStr = (s , k) => {
    if(s.length <= 1) return s 
    let count = k 
    let reverse = ''
    let i = 0 
    while(i < s.length){
        if(count === k){
            let string = ''
            for(let j = 0 ; j < k ; j ++){
                if(s[j] === undefined) break 
                string = s[i ++] + string 
                count -- 
            }
            reverse += string 
        }else{
            reverse += s[i++]
            count ++
        }
    }

    return reverse 
}

console.log(reverseStr("abcdefg", 2))