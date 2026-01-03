// 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        if (i > 0 && nums[i] == nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                console.log(i, left, right);
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                while(nums[left] == nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,0,0,0]));