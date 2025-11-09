// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse()
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        let aux = s[i];
        s[i] = s[j];
        s[j] = aux;
        i++;
        j--;
        
    }
};

reverseString(["h","e","l","l","o"]);