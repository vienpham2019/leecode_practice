// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

const addStrings = (num1 , num2) => {
    let result = ''
    let i = num1.length - 1
    let j = num2.length - 1
    let carry = 0 
    while(i >= 0 || j >= 0){
        let sum = carry 
        if(i >= 0) sum += num1.charAt(i--) - '0'
        if(j >= 0) sum += num2.charAt(j--) - '0'

        result = ( sum % 10 ) + result
        carry = Math.floor(sum / 10)
    }
    if(carry !== 0) result = carry + result 
    return result 
}

console.log(addStrings('12' , '32'))