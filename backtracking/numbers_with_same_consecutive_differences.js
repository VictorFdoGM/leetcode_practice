// Numbers With Same Consecutive Differences
// Given two integers n and k, return an array of all the integers of length n where the difference between every two consecutive digits is k. You may return the answer in any order.

// Note that the integers should not have leading zeros. Integers as 02 and 043 are not allowed.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    
    let backtrack = (curr) => {

        if (curr.length == n) {
            ans.push(Number(curr.join('')));
            return;
        }

        if (curr[curr.length - 1] - k >= 0) {
            curr.push(curr[curr.length - 1] - k);
            backtrack(curr);
            curr.pop();
        }

        if (curr[curr.length - 1] + k < 10 && k != 0) {
            curr.push(curr[curr.length - 1] + k);
            backtrack(curr);
            curr.pop();
        }

    }

    let ans = [];
    for (let i = 1; i < 10; i++) {
        backtrack([i]);
    }
    return ans;
};


console.log(numsSameConsecDiff(3, 7));
console.log(numsSameConsecDiff(2, 1));
console.log(numsSameConsecDiff(2, 0));