// Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    
    let res = '';
    let resLen = 0;

    for (let i = 0; i < s.length; i++) {
        //Odd length;
        let left = i;
        let right = i;

        while(left >= 0 && right < s.length && s[left] == s[right]) {
            if ((right - left + 1) > resLen) {
                res = s.substring(left, right + 1);
                resLen = right - left + 1
            }
            left--;
            right++;
        }
        
        //even length;
        left = i;
        right = i + 1;
 
        while(left >= 0 && right < s.length && s[left] == s[right]) {
            if ((right - left + 1) > resLen) {
                res = s.substring(left, right + 1);
                resLen = right - left + 1
            }
            left--;
            right++;
        }
    }
    return res;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abbcccba'));