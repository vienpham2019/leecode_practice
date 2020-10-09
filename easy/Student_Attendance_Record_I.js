// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.
// Example 1:
// Input: "PPALLP"
// Output: True

// Example 2:
// Input: "PPALLL"
// Output: False

const checkRecord = s => {
    let countA = 0 , countL = 0 
    for(let letter of s) {
        if(letter === 'L'){
            if(++countL > 2) return false  
        } else if(letter === 'A'){
            if(++countA > 1) return false 
            countL = 0  
        }else{
            countL = 0 
        }
    }
    return true 
}

console.log(checkRecord('PPALLL'))
