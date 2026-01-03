// Word Ladder
// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0; 

    let L = beginWord.length;

    // Build pattern map:  *ot → ["hot", "dot", "lot"]
    let patterns = new Map();
    for (const word of wordSet) {
        for (let i = 0; i < L; i++) {
            let pattern = word.slice(0, i) + "*" + word.slice(i + 1);
            if (!patterns.has(pattern)) patterns.set(pattern, []);
            patterns.get(pattern).push(word);
        }
    }

    let queue = [[beginWord, 1]];
    let seen = new Set([beginWord]);

    while (queue.length) {
        let [word, steps] = queue.shift();

        if (word === endWord) return steps;

        // explore neighbors by pattern
        for (let i = 0; i < L; i++) {
            let pattern = word.slice(0, i) + "*" + word.slice(i + 1);

            if (!patterns.has(pattern)) continue;

            for (let neighbor of patterns.get(pattern)) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    queue.push([neighbor, steps + 1]);
                }
            }
            patterns.set(pattern, []);
        }
    }

    return 0;
};

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]));