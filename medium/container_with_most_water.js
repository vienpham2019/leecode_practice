// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

var maxArea = function(height) {
    let start_index = 0 
    let end_index = height.length - 1 
    let answer = 0
    for(let i = 0; i < height.length ; i ++){
        let area
        if(start_index === end_index) break
        if(height[start_index] < height[end_index]){
            area = height[start_index] * (end_index - start_index)
            start_index += 1 
        }else{
            area = height[end_index] * (end_index - start_index)
            end_index -= 1 
        }

        if(area > answer ){
            answer = area
        }
    }

    return answer
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))