// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * Using a set, space O(n), and O(n) runtime
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let numSet = new Set(nums);

    for (let i = 0; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
};

/**
 * Using prefix sum, space O(1), and O(n) runtime
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let sum = nums[0];
    let indexSum = nums.length;
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        indexSum += i;
    }

    return indexSum - sum;
};

/**
 * Using Gauss' Formula, space O(1), and O(n) runtime
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let expectedSum = nums.length * (nums.length + 1) / 2;
    let actualSum = 0
    for (const element of nums) {
        actualSum += element;
    }

    return expectedSum - actualSum;
};

console.log(missingNumber([3,0,1]));