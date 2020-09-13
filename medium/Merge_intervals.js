// Given a collection of intervals, merge all overlapping intervals.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

const merge = intervals => {
    if(intervals.length <= 1 ) return intervals

    intervals = intervals.sort((a,b) => a[0] - b[0])
    let result = [intervals[0]]

    for(let i = 1 ; i < intervals.length ; i ++){
        let curr_interval = result[result.length - 1]
        let interval  = intervals[i]

        if(curr_interval[1] >= interval[0]){
            curr_interval[1] = Math.max(curr_interval[1] , interval[1])
        }else{
            result.push(interval)
        }
    }

    return result 
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))