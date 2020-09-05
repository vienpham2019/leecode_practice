// Count the number of prime numbers less than a non-negative number, n.

// Example:
// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

const countPrimes = n => {
    let array = []
    let result = []
    let count = 0 
    for(let i = 0; i < n ; i++){
        array[i] = true
    }

    for(let i = 2 ; i**2 < n ; i ++){
        if(array[i]){
            for(let j = i; j * i < n ; j ++){
                array[j * i] = false 
            }
        }
    }

    for(let i = 2 ; i < n ; i ++){
        if(array[i]) {
            result.push(i)
            count ++
        }
    }
    return ({result , count})
}

console.log(countPrimes(20))