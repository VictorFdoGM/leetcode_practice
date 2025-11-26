// 78. Subsets
// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let backtrack = (curr, i) => {
        if (i > nums.length) {
            return;
        }
        
        ans.push([...curr]);
        for (let j = i; j < nums.length; j++) {
            curr.push(nums[j]);
            backtrack(curr, j + 1);
            curr.pop();
        }
    }
    
    let ans = [];
    backtrack([], 0);
    return ans;
};