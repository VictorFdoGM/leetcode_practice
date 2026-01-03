// 39. Combination Sum
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let backtrack = (curr, index, sum = 0) => {
        if (sum > target) return;
        if (sum == target) {
            ans.push([...curr]);
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            curr.push(candidates[i]);
            backtrack(curr, i, sum + candidates[i]);
            curr.pop();
        }
    }

    let ans = [];
    backtrack([], 0);
    return ans;
};

console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,5], 8));