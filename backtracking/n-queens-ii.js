// 52. N-Queens II
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    
    let backtrack = (row, cols, diagonals, antiDiagonals) => {

        if (row == n) return 1;
        
        let solutions = 0;
            
        for (let col = 0; col < n; col++) {
            let diagonal = row - col;
            let antiDiagonal = row + col;

            if (cols.has(col) || diagonals.has(diagonal) || antiDiagonals.has(antiDiagonal)) {
                continue;
            }

            cols.add(col);
            diagonals.add(diagonal);
            antiDiagonals.add(antiDiagonal);

            solutions += backtrack(row + 1, cols, diagonals, antiDiagonals);

            cols.delete(col);
            diagonals.delete(diagonal);
            antiDiagonals.delete(antiDiagonal);
        }

        return solutions;
    }
    
    return backtrack(0, new Set(), new Set(), new Set());
};

console.log(totalNQueens(4));