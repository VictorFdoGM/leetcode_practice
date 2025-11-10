// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    let magazineMap = {};
    for (const element of magazine) {
        magazineMap[element] = (magazineMap[element] || 0) + 1;
    }

    for (const element of ransomNote) {
        if (magazineMap[element] == undefined) return false;
        if (magazineMap[element] == 0) return false;

        magazineMap[element]--;
    }

    return true;
};