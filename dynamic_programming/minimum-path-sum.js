// 64. Minimum Path Sum
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let memo = [];
    for (let i = 0; i < m; i++) {
        memo.push(new Array(n).fill(-1));
    }

    let dp = (row, col) => {

        if (row + col == 0) return grid[row][col];

        if (memo[row][col] != -1) {
            return memo[row][col];
        }

        let ans = Infinity;
        if (row > 0) {
            ans = Math.min(ans, dp(row - 1, col));
        }

        if (col > 0) {
            ans = Math.min(ans, dp(row, col - 1));
        }
        
        memo[row][col] = grid[row][col] + ans;
        return memo[row][col];
    }

    return dp(m - 1, n - 1);
}

/**
 * Bottom up
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(grid) {
//     let dp = [];
//     for (let i = 0; i < grid.length; i++) {
//         dp.push(new Array(grid.length).fill(0));
//     }

//     dp[0][0] = grid[0][0];

//     for (let row = 0; row < grid.length; row++) {
//         for (let col = 0; col < grid[0].length; col++) {
            
//             if (row + col == 0) continue;

//             let ans = Infinity;
//             if (row > 0) {
//                 ans = Math.min(ans, dp[row -1][col]);
//             }

//             if (col > 0) {
//                 ans = Math.min(ans, dp[row][col - 1]);
//             }
            
//             dp[row][col] = ans + grid[row][col];
//         }
//     }

//     return dp[grid.length - 1][grid[0].length - 1];
// };

console.log(minPathSum([[1,2,3],[4,5,6]]));