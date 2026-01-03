// You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a Boustrophedon style starting from the bottom left of the board (i.e. board[n - 1][0]) and alternating direction each row.

// You start on square 1 of the board. In each move, starting from square curr, do the following:

// Choose a destination square next with a label in the range [curr + 1, min(curr + 6, n2)].
// This choice simulates the result of a standard 6-sided die roll: i.e., there are always at most 6 destinations, regardless of the size of the board.
// If next has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to next.
// The game ends when you reach the square n2.
// A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination of that snake or ladder is board[r][c]. Squares 1 and n2 are not the starting points of any snake or ladder.

// Note that you only take a snake or ladder at most once per dice roll. If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.

// For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your destination square is 2. You follow the ladder to square 3, but do not follow the subsequent ladder to 4.
// Return the least number of dice rolls required to reach the square n2. If it is not possible to reach the square, return -1.


/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {

    let n = board.length;
    let cells = Array(n * n + 1).fill(0);

    let idx = 1;
    let row = n - 1;
    let col = 0;
    let leftToRight = true;

    while (idx <= n * n) {
        let val = board[row][col];
        cells[idx] = val; // val = -1, or the destination square

        if (leftToRight) {
            col++;
            if (col === n) {
                row--;
                col = n - 1;
                leftToRight = false;
            }
        } else {
            col--;
            if (col === -1) {
                row--;
                col = 0;
                leftToRight = true;
            }
        }

        idx++;
    }
    
    let seen = new Array(n * n + 1).fill(false);
    let queue = [[1, 0]];
    seen[1] = true;

    while(queue.length) {
        let nextQueue = []

        for (let i = 0; i < queue.length; i++) {
            let curr = queue[i][0];
            let steps = queue[i][1];

            if (curr == n * n) return steps;

            for (let dice = 1; dice <= Math.min(6, n*n); dice++) {
                let next = curr + dice;

                if (next > n*n) break;

                if (cells[next] !== -1) {
                    next = cells[next];
                }

                if (!seen[next]) {
                    seen[next] = true;
                    nextQueue.push([next, steps + 1]);
                }
            }
        }
        queue = nextQueue;
    }

    return -1;
};

console.log(snakesAndLadders([[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]));
console.log(snakesAndLadders([[-1,-1],[-1,3]]));
console.log(snakesAndLadders([[-1,-1,-1],[-1,9,8],[-1,8,9]]));

console.log(snakesAndLadders([[1,1,-1],[1,1,1],[-1,1,1]]));