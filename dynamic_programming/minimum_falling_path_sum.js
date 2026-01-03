// Minimum Falling Path Sum
// Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

// A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    
    let dp = [];
    for (let i = 0; i < matrix.length; i++) {
        dp.push(new Array(matrix.length).fill(0));
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            
            if (row == 0) {
                dp[row][col] = matrix[row][col];
            } else {
                let ans = 0;
                if (col == 0) {
                    ans = Math.min(dp[row - 1][col], dp[row - 1][col + 1]);
                } else if (col == dp.length - 1) {
                    ans = Math.min(dp[row - 1][col - 1], dp[row - 1][col]);
                } else {
                    ans = Math.min(dp[row - 1][col - 1], dp[row - 1][col], dp[row - 1][col + 1]);
                }

                dp[row][col] = ans + matrix[row][col];
            }
        }
    }
    return Math.min(...dp[matrix.length - 1]);
};

console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]));
console.log(minFallingPathSum([[-19,57],[-40,-5]]));