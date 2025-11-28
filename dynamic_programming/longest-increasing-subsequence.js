// 300. Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest strictly increasing subsequence.

/**
 * Top-down implementation
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = i => {
        if (memo[i] != -1) {
            return memo[i];
        }
        
        let ans = 1; // Base case
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                ans = Math.max(ans, dp(j) + 1);
            }
        }
        
        memo[i] = ans;
        return memo[i];
    }
    
    let memo = new Array(nums.length).fill(-1);
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        ans = Math.max(ans, dp(i));
    }
    
    return ans;
};

/**
 * Bottom-up implementation
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));