// Word Search II
// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

var Trie = function() {
    this.children = new Map();
    this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this;
    for (const c of word) {
        if (!curr.children.has(c)) {
            curr.children.set(c, new Trie());
        }
        curr = curr.children.get(c);
    }
    curr.isEnd = true;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const trie = new Trie();

    for (const word of words) {
        trie.insert(word);
    }

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    let isValid = (row, col) => {
        return 0 <= row && 0 <= col && row < board.length && col < board[0].length;
    }

    let res = new Set();
    let seen = new Set();

    let dfs = (row, col, node, word) => {
        if(!node.children.has(board[row][col]) || seen.has('' + row + col)) {
            return;
        }

        word += board[row][col];
        node = node.children.get(board[row][col]);
        
        if (node.isEnd) {
            res.add(word);
        }

        seen.add('' + row + col);
        for (const [dx, dy] of directions) {
            let nextRow = row + dx;
            let nextCol = col + dy;
            if (isValid(nextRow, nextCol)) {
                dfs(nextRow, nextCol, node, word);
            }
        }
        seen.delete('' + row + col);

    };

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            dfs(row, col, trie, '');
        }      
    }
    return Array.from(res);
};

console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]));
console.log(findWords([["a","b"],["c","d"]], ["abcb"]));
console.log(findWords([["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]], ["oa","oaa"]));
console.log(findWords([["a","b"]], ["ab"]));