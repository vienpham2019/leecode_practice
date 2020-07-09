// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:
// input n = 3 
// output = [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
//   ]

var generateParenthesis = function(n) {
    let output_array = []

    const backtrack = (ouput_array , string, n_open , n_close, n) => {
        if(string.length === n * 2){
            ouput_array.push(string)
            return
        }
    
        if(n_open !== 0) backtrack(output_array , string + "(" , n_open - 1 , n_close , n)
        if(n_open < n_close) backtrack(output_array , string + ")" , n_open, n_close - 1, n)
    }

    backtrack(output_array , "" , n , n , n)
    return output_array
};

console.log(generateParenthesis(2))