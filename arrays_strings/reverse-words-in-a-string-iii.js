// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');
    let reversedWords = words.map(item => item.split('').reverse().join(''));
    return reversedWords.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));