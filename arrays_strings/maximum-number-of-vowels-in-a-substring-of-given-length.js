// 1456. Maximum Number of Vowels in a Substring of Given Length
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
    };

    let i = 0;
    let j = 0;
    let maxSubstring = [];
    while(i < s.length) {

        while(!vowels[s[i]]) {
            i++;
        }
        j = 1;

        let substring = [];
        while(vowels[s[j]]) {
            substring.push(s[j]);
            j++;
        }
        i = j;

        if (substring.length > maxSubstring.length) {
            maxSubstring = substring;
        }
    }
};