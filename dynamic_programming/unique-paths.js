// 62. Unique Paths
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

/**
 * Top-down approach
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = (row, col) => {
        if (row + col == 0) {
            return 1; // Base case
        }
        
        if (memo[row][col] != -1) {
            return memo[row][col];
        }
        
        let ways = 0;
        if (row > 0) {
            ways += dp(row - 1, col);
        }
        if (col > 0) {
            ways += dp(row, col - 1);
        }
        
        memo[row][col] = ways;
        return ways;
    }
    
    let memo = [];
    for (let i = 0; i < m; i++) {
        memo.push(new Array(n).fill(-1));
    }
    
    return dp(m - 1, n - 1);
};

/**
 * Bottom-up
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = [];
    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(0));
    }
    
    dp[0][0] = 1
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (row > 0) {
                dp[row][col] += dp[row - 1][col];
            }
            if (col > 0) {
                dp[row][col] += dp[row][col - 1];
            }
        }
    }
    
    return dp[m - 1][n - 1];
};