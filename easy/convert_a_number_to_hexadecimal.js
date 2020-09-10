// All letters in hexadecimal (a-f) must be in lowercase.
// The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
// The given number is guaranteed to fit within the range of a 32-bit signed integer.
// You must not use any method provided by the library which converts/formats the number to hex directly.

// Example 1:
// Input:
// 26
// Output:
// "1a"

// Example 2:
// Input:
// -1
// Output:
// "ffffffff"

const toHex = num => {
    if(num === 0) return '0'
    if(num < 0) num = num + 2**32

    let result = ''
    while(num !== 0){
        let remain = num % 16 
        num = Math.floor(num / 16)
        
        if(remain < 10){
            result = remain + result 
        }else{
            result = String.fromCharCode((remain % 10) + 97) + result 
        }
    }

    return result 
}

console.log(toHex(3123))