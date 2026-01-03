// Most Common Word
// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Note that words can not contain punctuation symbols.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    
    let words = [];
    let i = 0;
    let symbols = new Set([' ', '!', '?', "'", ',', ';', '.']);
    let bannedSet = new Set(banned);
    while(i < paragraph.length) {
        let word = [];
        while(!symbols.has(paragraph[i]) && i < paragraph.length) {
            word.push(paragraph[i]);
            i++;
        }
        if (word.length > 0) {
            words.push(word.join('').toLocaleLowerCase());
        }
        i++;
    }

    let map = {'': 0};
    let mostCommon = '';
    for (const word of words) {
        if (bannedSet.has(word)) continue;

        map[word] = (map[word] || 0) + 1;
        if (map[word] > map[mostCommon]) {
            mostCommon = word;
        }
    }

    return mostCommon;
};

var mostCommonWord = function (paragraph, banned) {
    const bannedSet = new Set(banned);
    const counts = new Map();
    let maxCount = 0;
    let result = "";

    // Normalize and split
    const words = paragraph
        .toLowerCase()
        .split(/[^a-z]+/);

    for (const word of words) {
        if (word === "" || bannedSet.has(word)) continue;

        const count = (counts.get(word) || 0) + 1;
        counts.set(word, count);

        if (count > maxCount) {
            maxCount = count;
            result = word;
        }
    }

    return result;
};

console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']))
console.log(mostCommonWord('Bob', []))