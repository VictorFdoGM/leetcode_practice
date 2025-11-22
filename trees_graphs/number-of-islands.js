// 200. Number of Islands
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let valid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n && grid[row][col] == "1";
    }
    
    let dfs = (row, col) => {
        for (const [dx, dy] of directions) {
            let nextRow = row + dy, nextCol = col + dx;
            if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                seen[nextRow][nextCol] = true;
                dfs(nextRow, nextCol);
            }
        }
    };
    
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let m = grid.length;
    let n = grid[0].length;
    let seen = [];
    
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false));
    }
    
    let ans = 0;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] == "1" && !seen[row][col]) {
                ans++;
                seen[row][col] = true;
                dfs(row, col);
            }
        }
    }
    
    return ans;
};