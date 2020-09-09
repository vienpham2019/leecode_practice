// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Input: "()"
// Output: true
// Input: "(]"
// Output: false

var isValid = function(s) {
    let close_patent = {"(":")", "[":"]", "{":"}"}
    let stack  = []
    let answer = true
    for(let i = 0 ; i < s.length ; i ++){
        if(s[i].match(/[( | [ | { ]/)){
            stack.unshift(s[i])
        }else{
            if(close_patent[stack[0]] === s[i]){
                stack.shift()
                answer = true
            }else{
                answer = false
                return answer  
            }
        }
    }

    return !stack.length && answer ? true : false 
};

console.log(isValid(''))