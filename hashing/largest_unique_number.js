// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    
    let numMap = {};
    for (const element of nums) {
        numMap[element] = (numMap[element] || 0) + 1;
    }

    let maxVal = -1;
    for (const key in numMap) {
        if (numMap[key] == 1) {
            maxVal = Math.max(maxVal, Number(key));
        }
    }

    return maxVal;
};