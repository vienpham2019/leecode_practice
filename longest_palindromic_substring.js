// input = 'babad' ==> output = 'bab' / 'aba' 
// input = 'cdds' ==> output = 'dd' 
var longestPalindrome = function(s) {
    if(!s && !s.length) return ''
    let max_length  = 0 
    let start_index , end_index 

    for(let i = 0 ; i < s.length ; i ++){
        let len_1 = spanFromMiddle(s , i , i)
        let len_2 = spanFromMiddle(s , i , i + 1)
        let distance 
        if(len_1 > len_2 && max_length < len_1){
            distance = Math.floor(len_1 / 2)
            max_length = len_1
            start_index = i - distance
            end_index = i + distance
        }else if(len_1 < len_2 && max_length < len_2){
            distance = Math.floor((len_2 - 2) / 2) <= 0 ? 0 : Math.floor((len_2 - 2) / 2)
            max_length = len_2
            start_index = i - distance
            end_index = i + 1 + distance
        }
    }
    return s.substring(start_index , end_index + 1)
};

const spanFromMiddle = (s , left_index , right_index) => {
    let count = 0
    while(left_index >= 0 && right_index < s.length){
        if(s[left_index] === s[right_index]){
            count += left_index === right_index ? 1 : 2
            left_index -= 1 
            right_index += 1
        }else{
            break
        }
    }
    return count
}

console.log(longestPalindrome("abacbcdca"))