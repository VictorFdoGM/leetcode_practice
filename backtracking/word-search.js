// 79. Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    let m = board.length;
    let n = board[0].length;

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    let isValidPos = (dx, dy) => {
        return 0 <= dx && 0 <= dy && dx < m && dy < n;
    }

    let isValidChar = (cell, charPos) => {
        return cell == word[charPos];
    }
    
    let ans = false;
    let backtrack = (row, col, charPos, cells) => {

        if (charPos == word.length - 1) {
            return true;
        }
        
        for (const direction of directions) {
            let nextRow = row + direction[0];
            let nextCol = col + direction[1];

            if (isValidPos(nextRow, nextCol) && !cells.has(`${nextRow}${nextCol}`) && isValidChar(board[nextRow][nextCol], charPos + 1)) {
                cells.add(`${nextRow}${nextCol}`);
                if (backtrack(nextRow, nextCol, charPos + 1, cells)) return true;
                cells.delete(`${nextRow}${nextCol}`);
            }
        }

        return false;
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {

            if (board[row][col] === word[0]) {
                let visited = new Set([`${row}${col}`]);
                if (backtrack(row, col, 0, visited)) return true;
            }
        }
    }

    return false
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE'));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB'));
console.log(exist([["a","b"]], 'ba'));
console.log(exist([["a","a"]], 'aaa'));