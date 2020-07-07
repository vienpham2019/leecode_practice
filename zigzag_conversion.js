// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// P   A   H   N
// A P L S I I G
// Y   I   R

var convert = function(s, numRows) {
    if(numRows <= 1) return s 
    let answer = []
    let current_row = current_col = 0 
    let gap_index = numRows * 2 - 2 
    let c_r = 1

    for(let i = 0; i < s.length ; i ++){
        answer[current_row] ? answer[current_row] += s[i] : answer[current_row] = s[i]
        current_row += c_r 
        if(current_row + c_r < 0 || current_row + c_r === numRows){
            c_r *= -1
        }
        if(i === gap_index ){
            gap_index += numRows * 2 - 2 
        }

        if(i >= gap_index - numRows - 3 && i < gap_index){
            current_col += 1 
        }
    }
    return answer.join('')
};

console.log(convert("PAYPALISHIRING", 4))