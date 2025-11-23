// 1091. Shortest Path in Binary Matrix
// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let valid = (row, col) => {
        return 0 <= row && row < n && 0 <= col && col < n && grid[row][col] == 0;
    }
    
    if (grid[0][0] == 1) {
        return -1;
    }
    
    let n = grid.length;
    let seen = [];
    for (let i = 0; i < n; i++) {
        seen.push(new Array(n).fill(false));
    }
    seen[0][0] = true;
    
    let queue = [[0, 0]]; // row, col
    let directions = [[0, 1], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1], [0, -1], [-1, 0]];
    let steps = 0;
    
    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        steps++;
        
        for (let i = 0; i < currentLength; i++) {
            let [row, col] = queue[i];
            if (row == n - 1 && col == n - 1) {
                return steps;
            }

            for (const [dx, dy] of directions) {
                let nextRow = row + dy, nextCol = col + dx;
                if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    nextQueue.push([nextRow, nextCol]);
                }
            }
        }
        
        queue = nextQueue;
    }
    
    return -1;
};