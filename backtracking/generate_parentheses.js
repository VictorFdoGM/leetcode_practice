// Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * My first solution
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let backtrack = (curr) => {

        if (curr.length == n * 2) {
            ans.push(curr.join(''));
            return;
        }

        for (const elem of ['(', ')']) {

            if (elem == ')' && track['('] <= track[')']) continue;

            if (track[elem] < n) {
                track[elem]++;
                curr.push(elem);
                backtrack(curr);
                curr.pop();
                track[elem]--;
            }   
        }
    }

    let ans = [];
    let track = {
        '(': 0,
        ')': 0
    };
    backtrack([]);
    return ans;
};

/**
 * With leetcode enhancement
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let backtrack = (curr, left, right) => {

        if (curr.length == n * 2) {
            ans.push(curr.join(''));
            return;
        }

        if (left < n) {
            curr.push("(");
            backtrack(curr, left + 1, right);
            curr.pop();
        }

        if (right < left) {
            curr.push(")");
            backtrack(curr, left, right + 1);
            curr.pop();
        }
    }

    let ans = [];
    backtrack([], 0, 0);
    return ans;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));