// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arrayPrefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        arrayPrefix[i] = arrayPrefix[i - 1] + nums[i];
    }
    return arrayPrefix;
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));