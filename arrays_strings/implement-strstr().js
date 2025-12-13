// Implement strStr()
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    let i = 0;
    while (i < haystack.length) {

        let j = 0;
        while(haystack[i + j] == needle[j] && j < needle.length) {
            j++;
        }

        if (j == needle.length) {
            return i;
        }
        i++;
    }
    return -1;
};

console.log(strStr('leetcode', 'leeto'));