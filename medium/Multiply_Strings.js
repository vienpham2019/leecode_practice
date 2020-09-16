// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Example 1:
// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:
// Input: num1 = "123", num2 = "456"
// Output: "56088"

// Note:
// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly

var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0'
    let result = new Array(num1.length + num2.length).fill(0)

    for(let i = num2.length - 1; i >= 0 ; i --){
        for(let j = num1.length - 1 ; j >= 0 ; j --){
            let total = (num2[i] - '0') * (num1[j] - '0')
            let sum = result[i + j + 1] + total
            result[i + j + 1] = sum % 10 
            result[i + j] += Math.floor(total / 10)
        }
    }

    if(result[0] === 0) result.shift()

    return result.join('')
}

console.log(multiply("9" , "9"))
