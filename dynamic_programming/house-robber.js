// 198. House Robber
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


/**
 * Top-bottom implementation
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    let map = new Map();
    let dp = (i) => {
        if (i == 0) return nums[0];

        if (i == 1) return Math.max(nums[0], nums[1]);

        if (map.has(i)) return map.get(i);

        map.set(i, Math.max(dp(i - 1), dp(i - 2) + nums[i]))
        return map.get(i);
    }
    return dp(nums.length - 1);
};


/**
 * bottom-up implementation
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 1) {
        // to prevent out of bounds error
        return nums[0];
    }
    
    let n = nums.length;
    let dp = new Array(n).fill(0);
    
    // Base cases
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    
    return dp[n - 1];
};

/**
 * Space complexity of O(1)
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 1) {
        // to prevent out of bounds error
        return nums[0];
    }
    
    let n = nums.length;
    
    // Base cases
    let backTwo = nums[0];
    let backOne = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < n; i++) {
        let temp = backOne;
        backOne = Math.max(backOne, backTwo + nums[i]);
        backTwo = temp;
    }
    
    return backOne;
};

console.log(rob([1,2,3,1]));
