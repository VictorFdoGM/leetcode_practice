// 542. 01 Matrix
// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two cells sharing a common edge is 1.

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let valid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n && mat[row][col] == 1;
    }

    m = mat.length;
    n = mat[0].length;
    let queue = [];
    let seen = [];
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false));
    }
    
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] == 0) {
                queue.push([row, col]);
                seen[row][col] = true;
            }
        }
    }
    
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let steps = 0;

    while(queue.length) {
        let nextQueue = [];
        steps++;
        for (let i = 0; i < queue.length; i++) {

            for (const [dx, dy] of directions) {
                let nextRow = queue[i][0] + dx;
                let nextCol = queue[i][1] + dy;

                if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    nextQueue.push([nextRow, nextCol]);
                    mat[nextRow][nextCol] = steps;
                }
            }
        }
        queue = nextQueue;
        
    }
    return mat;
};

console.log(updateMatrix([[0,0,0],[0,1,0],[0,0,0]]));
console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]));