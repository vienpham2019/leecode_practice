// Input: 3
// Output: "III"

//Input: 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var intToRoman = function(num) {
    const roman_value = [1000, 900, 500, 400, 100, 90 , 50 , 40 , 10 , 9 , 5 , 4 , 1]
    const roman_symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    const index = {4: 0, 3: 1, 2: 5, 1: 8}
    let i = index[`${num}`.length]
    let answer = ''
    while(num > 0){
        if(num - roman_value[i] >= 0){
            num -= roman_value[i]
            answer += roman_symbol[i]
        }else{
            i ++
        }
    } 
    return answer 
};

console.log(intToRoman(1994))