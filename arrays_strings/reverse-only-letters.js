// Given a string s, reverse the string according to the following rules:
// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    
    let reverseWord = [];
    let j = s.length - 1;
    for (let i = 0; i < s.length; i++) {
        
        if (/^[a-zA-Z]$/.test(s[i])) {
            
            while(!(/^[a-zA-Z]$/.test(s[j]))) {
                j--;
            }
            reverseWord.push(s[j]);
            j--;
        } else {
            reverseWord.push(s[i]);
        }
    }
    return reverseWord.join('');
};

console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));