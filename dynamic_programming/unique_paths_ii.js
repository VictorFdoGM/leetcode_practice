// Unique Paths II
// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    let dp = [];
    for (let i = 0; i < obstacleGrid.length; i++) {
        dp.push(new Array(obstacleGrid[0].length).fill(0));
    }

    dp[0][0] = 1;
    for (let row = 0; row < obstacleGrid.length; row++) {
        for (let col = 0; col < obstacleGrid[0].length; col++) {

            if (obstacleGrid[row][col] == 1) {
                dp[row][col] = 0;
                continue;
            }

            if (row > 0) {
                dp[row][col] += dp[row - 1][col];
            }
            
            if (col > 0) {
                dp[row][col] += dp[row][col - 1];
            }
        }        
    }
    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    let memo = [];
    for (let i = 0; i < obstacleGrid.length; i++) {
        memo.push(new Array(obstacleGrid[0].length).fill(0));
    }

    let dp = (row, col) => {

        if (row + col == 0) return 1;

        if (obstacleGrid[row][col] == 1) {
            return 0;
        }

        let ans = 0;
        if (row > 0) {
            ans += dp(row - 1, col);
        }

        if (col > 0) {
            ans += dp(row, col - 1);
        }

        return ans;
    }
    
    return dp(obstacleGrid.length - 1, obstacleGrid[0].length - 1);
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
console.log(uniquePathsWithObstacles([[0,1],[0,0]]));