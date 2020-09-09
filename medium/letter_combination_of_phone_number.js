// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    let key = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]

    let answer = key[Math.floor(digits[0])].split('')

    for(let i = 1; i < digits.length ; i ++ ){
        let combination = key[Math.floor(digits[i])]
        let current_length = answer.length
        for(let j = 0; j < current_length; j ++ ){
            let current_letter = answer.shift()
            for(let k = 0; k < combination.length; k ++){
                answer.push(`${current_letter}${combination[k]}`)
            }
        }
    }
    return answer

};

console.log(letterCombinations('234'))