// Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) return ''; 

    let dictT = new Map();
    for (let i = 0; i < t.length; i++) {
        let count = dictT.get(t.charAt(i)) || 0;
        dictT.set(t.charAt(i), count + 1);
    }

    let left = 0;
    let right = 0;
    let requiredChars = dictT.size;
    let currentChars = 0;
    let windowCount = new Map();
    let windowLength = -1;
    let windowStart = 0;
    let windowEnd = 0;
    while (right < s.length) {

        let currChar = s[right];
        let count = windowCount.get(currChar) || 0;
        windowCount.set(currChar, count + 1);

        if (dictT.has(currChar) && windowCount.get(currChar) === dictT.get(currChar)) {
            currentChars++;
        }

        while (left <= right && currentChars === requiredChars) {
            c = s.charAt(left);

            if (windowLength === -1 || right - left + 1 < windowLength) {
                windowLength = right - left + 1;
                windowStart = left;
                windowEnd = right;
            }

            windowCount.set(c, windowCount.get(c) - 1);
            if (dictT.has(c) && windowCount.get(c) < dictT.get(c)) {
                currentChars--;
            }

            left++;
        }
        right++;
    }
    return windowLength === -1 ? "" : s.substring(windowStart, windowEnd + 1);
};