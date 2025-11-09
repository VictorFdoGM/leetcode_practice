// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let i = 0;
    let j = nums.length - 1;
    let outputIndex = nums.length - 1;
    let output = Array(nums.length);
    while (i < j) {
        let iPow2 = nums[i] * nums[i];
        let jPow2 = nums[j] * nums[j];
        if (iPow2 < jPow2) {
            output[outputIndex] = jPow2;
            j--;
        } else {
            output[outputIndex] = iPow2;
            i++;
        }
        outputIndex--;
    }
    output[outputIndex] = nums[i] * nums[i];
    return output;
};

sortedSquares([-4,-1,0,3,10]);
sortedSquares([-7,-3,2,3,11]);