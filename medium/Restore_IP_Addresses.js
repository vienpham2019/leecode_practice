// Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order.

// A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses. 

// Example 1:
// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]

// Example 2:
// Input: s = "0000"
// Output: ["0.0.0.0"]

// Example 3:
// Input: s = "1111"
// Output: ["1.1.1.1"]

// Example 4:
// Input: s = "010010"
// Output: ["0.10.0.10","0.100.1.0"]

// Example 5:
// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

// Constraints:
// 0 <= s.length <= 3000
// s consists of digits only.

const restoreIpAddresses = s => {
    let result = []
    let n = s.length 
    for(let i = 1; i < n && i < 4 ; i ++){
        let first = s.substring(0 , i)
        if(!isValid(first)) continue 
        for(let j = 1 ; i + j < n && j < 4 ; j ++){
            let second = s.substring(i , i + j)
            if(!isValid(second)) continue 
            for(let k = 1 ; i + j + k < n && k < 4 ; k ++){
                let third = s.substring(i + j , i + j + k) 
                let fourth = s.substring(i + j + k)
                if(!isValid(third) || !isValid(fourth)) continue
                result.push(`${first}.${second}.${third}.${fourth}`)
            }
        } 
    } 
    return result
}

const isValid = s => {
    if(s[0] === '0' && s.length > 1) return false 
    let n = Math.floor(s)
    return n >= 0 && n <= 255
}

let s = "101023" 

console.log(restoreIpAddresses(s))