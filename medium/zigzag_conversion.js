// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// P   A   H   N
// A P L S I I G
// Y   I   R

// 1st Approach 

// var convert = function(s, numRows) {
//     if(numRows <= 1 || numRows >= s.length) return s 
//     let result = new Array(numRows).fill('')
//     let direct = -1 
//     let row = 0 
//     for(let i = 0 ; i < s.length ; i ++) {
//         result[row] += s.charAt(i)
//         if(row === 0 || row === numRows - 1) direct *= -1 
//         row += direct
//     }

//     return result 
// };

// 2nd Approach 
// s = "PAYPALISHIRING", numRows = 4
// P     I    N
// A   L S  I G 
// Y A   H R
// P     I

// row 0. 0 6 12         0 +6 +6 
// row 1. 1 5 7 11 13    1 +4 +2 +4 +2
// row 2. 2 4 8 10       2 +2 +4 +2 +4
// row 3. 3 9            3 +6 +6

const convert = (s , numRows) => {
    if(numRows <= 1) return s 
    let result = ''
    let cycle = 2 * numRows - 2
    for(let i = 0; i < numRows ; i ++){
        for(let j = i ; j < s.length ; j += cycle){
            result += s[j]
            k = j + cycle - 2 * i 
            if(i !== 0 && i !== numRows - 1 && k < s.length) result += s[k]
        }
    }
    return result
}

console.log(convert("PAYPALISHIRING", 12))