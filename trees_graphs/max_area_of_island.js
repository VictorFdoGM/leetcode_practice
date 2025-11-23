// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    let valid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n && grid[row][col] == "1";
    }
    
    let dfs = (row, col, area) => {
        area++;
        for (const [dx, dy] of directions) {
            let nextRow = row + dy, nextCol = col + dx;
            if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                seen[nextRow][nextCol] = true;
                area = dfs(nextRow, nextCol, area);
            }
        }
        return area;
    };
    
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let m = grid.length;
    let n = grid[0].length;
    let seen = [];
    
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false));
    }
    
    let area = 0;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] == "1" && !seen[row][col]) {
                seen[row][col] = true;
                area = Math.max(dfs(row, col, 0), area);
            }
        }
    }
    return area;
};

console.log(maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]));