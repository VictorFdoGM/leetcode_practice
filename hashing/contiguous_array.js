// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    
    let zeros = 0;
    let ones = 0;
    let maxLen = 0;
    let diffIndex = {};

    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] == 0) {
            zeros++;
        } else {
            ones++;
        }

        if (diffIndex[ones - zeros] == undefined) {
            diffIndex[ones - zeros] = i;
        }

        if (ones == zeros) {
            maxLen = ones + zeros;
        } else {
            let idx = diffIndex[ones - zeros];
            maxLen = Math.max(maxLen, i - idx);
        }
        
    }
    return maxLen;
};

// findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]);
console.log(findMaxLength([0,1,0,1,1,0,0]));