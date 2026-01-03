// Combination Sum III
// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    
    let backtrack = (curr, idx, sum) => {

        if (sum > n || curr.length > k) return;

        if (curr.length == k && sum == n) {
            ans.push([...curr]);
            return;
        }

        for (let index = idx; index <= 9; index++) {
            curr.push(index);
            backtrack(curr, index + 1, sum + index);
            curr.pop();
        }
    }

    let ans = [];
    backtrack([], 1, 0);
    return ans;
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(4, 1));
console.log(combinationSum3(9, 45));