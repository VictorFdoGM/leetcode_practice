// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {

    let isExit = (node) => {
        return (node[0] == 0 || node[0] == m - 1 || node[1] == 0 || node[1] == n - 1) && !(node[0] == entrance[0] && node[1] == entrance[1]);
    }

    let valid = (row, col) => {
        return 0 <= row && 0 <= col && row < m && col < n && maze[row][col] == '.';
    }
    
    let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let m = maze.length;
    let n = maze[0].length;
    let seen = [];
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false));
    }

    let queue = [entrance];
    seen[entrance[0]][entrance[1]] = true;

    let step = 0;
    while(queue.length) {
        let nextQueue = [];

        for (let i = 0; i < queue.length; i++) {
            for (const [dx, dy] of directions) {
                let nextRow = queue[i][0] + dx;
                let nextCol = queue[i][1] + dy;

                if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    nextQueue.push([nextRow, nextCol]);
                }
            }
            if (isExit(queue[i])) {
                return step;
            }
        }
        step++;

        queue = nextQueue;
    }
    return -1;
};

console.log(nearestExit([["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], [1, 2]));

console.log(nearestExit([["+","+","+"],[".",".","."],["+","+","+"]], [1, 0]));

console.log(nearestExit([[".","+"]], [0,0]));

console.log(nearestExit([["+",".","+","+","+","+","+"],["+",".","+",".",".",".","+"],["+",".","+",".","+",".","+"],["+",".",".",".",".",".","+"],["+","+","+","+",".","+","."]], [0,1]));