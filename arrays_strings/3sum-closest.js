// 3Sum Closest
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    nums.sort((a, b) => a - b);

    let closestSum = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while(left < right) {
            let currSum = nums[i] + nums[left] + nums[right];
            let currDiff = Math.abs(currSum - target);
            let closestDiff = Math.abs(closestSum - target);
            if (currDiff < closestDiff) {
                closestSum = currSum;
            }

            if (currSum < target) {
                left++;
            } else if (currSum > target) {
                right--;
            } else {
                return target;
            }
        }
    }
    return closestSum;
};

console.log(threeSumClosest([2,3,8,9,10], 16));