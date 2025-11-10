// Given a string s, find the length of the longest substring without duplicate characters.

/**
 * My solution
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let left = 0;
    let maxLen = 0;
    let charSet = new Set();
    for (let i = 0; i < s.length; i++) {
        
        if (charSet.has(s[i])) {

            while(s[left] != s[i]) {
                charSet.delete(s[left]);
                left++;
            }
            left++;

        } else {
            charSet.add(s[i]);
        }
        maxLen = Math.max(maxLen, i - left + 1);
    }

    return maxLen;
};

/**
 * Leet code solution
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let charToNextIndex = new Map();
    let maxLen = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        if (charToNextIndex.has(s[right])) {
            left = Math.max(charToNextIndex.get(s[right]), left);
        }
        maxLen = Math.max(maxLen, right - left + 1);
        charToNextIndex.set(s[right], right + 1);
    }
    return maxLen;
};