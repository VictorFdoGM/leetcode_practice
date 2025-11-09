// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    let start = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i];
        
        while(sum >= target) {
            minLength = Math.min(minLength, i - start + 1);
            sum -= nums[start];
            start++;
        }
    }
    
    if (minLength == Infinity) return 0;

    return minLength;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));