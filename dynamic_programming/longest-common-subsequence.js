// 1143. Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

/**
 * Top-down
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    
    let map = new Map();
    let dp = (i, j) => {
        
        if (i == text1.length || j == text2.length) return 0;

        let mapKey = '' + i + j;

        if (map.has(mapKey)) return map.get(mapKey);

        if (text1[i] == text2[j]) {
            return 1 + dp(i + 1, j + 1);
        }

        map.set(mapKey, Math.max(dp(i + 1, j), dp(i, j + 1)));
        return map.get(mapKey);
    }

    return dp(0, 0);
};

/**
 * Bottom-up
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length;
    let dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push(new Array(m + 1).fill(0));
    }
    
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (text1[i] == text2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    return dp[0][0];
};

console.log(longestCommonSubsequence('abcde', 'ace'));
console.log(longestCommonSubsequence('abc', 'abc'));
console.log(longestCommonSubsequence('abc', 'def'));