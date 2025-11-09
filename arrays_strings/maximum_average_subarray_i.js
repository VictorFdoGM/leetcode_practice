// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let currSum = 0;
    let average = 0
    for (let i = 0; i < k; i++) {
        currSum += nums[i];
    }
    average = currSum / k;
    
    let left = 0;
    for (let i = k; i < nums.length; i++) {
        currSum += nums[i] - nums[left];
        average = Math.max(average, currSum/k);
        left++;
    }

    return average;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));