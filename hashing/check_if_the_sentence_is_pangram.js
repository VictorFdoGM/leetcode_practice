// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    
    const sentenceSet = new Set(sentence.split(''));

    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        if (!sentenceSet.has(String.fromCharCode(i))) {
            return false;
        }
    }
    return true;
};

var checkIfPangram = function(sentence) {
    
    const sentenceSet = new Set(sentence.split(''));

    return sentenceSet.size == 26;
};