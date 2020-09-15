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
    let result = '0'

    let n_1 , n_2

    if(num1.length > num2.length) {
        n_1 = num1
        n_2 = num2
    }else{
        n_1 = num2
        n_2 = num1
    }

    for(let i = n_2.length - 1; i >= 0 ; i --){
        let remain = 0 
        let sum = `${remain}`
        for(let j = n_1.length - 1 ; j >= 0 ; j --){
            let total = (n_2[i] - '0') * (n_1[j] - '0')
            let zero = `${(10 ** (n_1.length - 1 - j))}`
            let t = `${total}` + zero.slice(1,zero.length)
            remain = Math.floor(total / 10)
            sum = add_string(sum , t)
        }
        let zero_2 = `${10 ** (n_2.length - 1 - i)}`
        sum += zero_2.slice(1,zero_2.length)
        result = add_string(result , sum)
    }

    return result 
}

const add_string = (num1 , num2) => {
    let i = num1.length - 1
    let j = num2.length - 1 
    let carry = 0 
    let result = ''
    while(i >= 0 || j >= 0){
        let sum_1 = carry 
        if(i >= 0) sum_1 += num1.charAt(i--) - '0'
        if(j >= 0) sum_1 += num2.charAt(j--) - '0'

        result = ( sum_1 % 10 ) + result
        carry = Math.floor(sum_1 / 10)
    }
    if(carry !== 0) result = carry + result

    return result
}

console.log(multiply("401716832807512840963",
"167141802233061013023557397451289113296441069"))
