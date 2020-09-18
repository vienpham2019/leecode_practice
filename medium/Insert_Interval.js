// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Example 3:
// Input: intervals = [], newInterval = [5,7]
// Output: [[5,7]]

// Example 4:
// Input: intervals = [[1,5]], newInterval = [2,3]
// Output: [[1,5]]

// Example 5:
// Input: intervals = [[1,5]], newInterval = [2,7]
// Output: [[1,7]]

const insert = (intervals , newInterval) => {
    if(intervals.length === 0) return [newInterval]
    let result = []

    for(let i = 0 ; i <= intervals.length ; i ++){
        if(i === intervals.length) {
            intervals.push(newInterval)
            break 
        }
        if(intervals[i][0] > newInterval[0]){
            intervals.splice(i,0,newInterval)
            break 
        }
    }

    for(let i = 0 ; i < intervals.length ; i ++){
        let curr_r = result[result.length - 1]
        let interval = intervals[i]

        if(curr_r && (curr_r[1] >= interval[0] || curr_r[0] > interval[0] ) ){
            curr_r[1] = Math.max(curr_r[1] , interval[1])
            curr_r[0] = Math.min(curr_r[0] , interval[0])
        }else{
            result.push(interval)
        }

    }

    return result
}

let intervals = [[1,3],[6,9]], newInterval = [10 , 18]

console.log(insert(intervals , newInterval))