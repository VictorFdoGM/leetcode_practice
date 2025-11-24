// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        let num = target - nums[i];
        
        if (hashMap[num] != undefined && hashMap[num] != i) {
            return [i, hashMap[num]];
        }
    }
};

twoSum([3,2,4], 6);