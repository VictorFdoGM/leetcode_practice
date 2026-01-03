// First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        let val = map.has(s[i]) ? Infinity : i;
        map.set(s[i], val);
    }

    let index = Infinity;
    for (const [key, val] of map) {
        index = Math.min(index, val);
    }

    return index == Infinity ? -1 : index
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));