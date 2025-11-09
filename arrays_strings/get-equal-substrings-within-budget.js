// You are given two strings s and t of the same length and an integer maxCost.
// You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).
// Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    
    let length = 0;
    let currentCost = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        currentCost += Math.abs(s.charCodeAt(i) - t.charCodeAt(i));

        while (currentCost > maxCost) {
            currentCost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
            start++;
        }
        length = Math.max(length, i - start + 1);
    }
    return length;
};

console.log(equalSubstring('krrgw', 'zjxss', 19));
console.log(equalSubstring('krpgjbjjznpzdfy', 'nxargkbydxmsgby', 14));