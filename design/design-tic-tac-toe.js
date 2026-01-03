// Design Tic-Tac-Toe
// Assume the following rules are for the tic-tac-toe game on an n x n board between two players:

// A move is guaranteed to be valid and is placed on an empty block.
// Once a winning condition is reached, no more moves are allowed.
// A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
// Implement the TicTacToe class:

// TicTacToe(int n) Initializes the object the size of the board n.
// int move(int row, int col, int player) Indicates that the player with id player plays at the cell (row, col) of the board. The move is guaranteed to be a valid move, and the two players alternate in making moves. Return
// 0 if there is no winner after the move,
// 1 if player 1 is the winner after the move, or
// 2 if player 2 is the winner after the move.

/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.board = [];
    for (let i = 0; i < n; i++) {
        this.board.push(new Array(n).fill(null));
    }
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    this.board[row][col] = player;

    let xWin = this.board[row].every((val) => val == player);
    let yWin = true;
    for (let i = 0; i < this.board.length; i++) {
        yWin = yWin && this.board[i][col] == player;
    }
    let diagonalWin = false;
    let antiDiagonalWin = false;   
    if (row - col == 0 || Math.abs(row + col) == this.board.length - 1) {
        let diagonal = true
        for (let i = 0; i < this.board.length; i++) {
            diagonal = diagonal && this.board[i][i] == player;
        }

        let antiDiagonal = true;
        for (let i = 0; i < this.board.length; i++) {
            let j = this.board.length - 1 - i;
            antiDiagonal = antiDiagonal && this.board[j][i] == player;
        }
        diagonalWin = diagonal;
        antiDiagonalWin = antiDiagonal;
    }
    return (xWin || yWin || diagonalWin || antiDiagonalWin) ? player : 0;
};

/**
 * O(1) approach 
 * O(n) space complexity
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.diagonal = 0;
    this.antiDiagonal = 0;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    let currPlayer = player == 1 ? 1 : -1;
    this.rows[row] += currPlayer;
    this.cols[col] += currPlayer;
    
    if (row - col == 0) {
        this.diagonal += currPlayer;
    }
    if (col == (this.cols.length - row - 1)) {
        this.antiDiagonal += currPlayer;
    }

    let n = this.rows.length;

    if (
        Math.abs(this.rows[row]) == n ||
        Math.abs(this.cols[col]) == n ||
        Math.abs(this.diagonal) == n ||
        Math.abs(this.antiDiagonal) == n
    ) {
        return player;
    }
    return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

var obj = new TicTacToe(3);
obj.move(0,0,1);
obj.move(0,2,2);
obj.move(2,2,1);
obj.move(1,1,2);
obj.move(2,0,1);
obj.move(1,0,2);
obj.move(2,1,1);
