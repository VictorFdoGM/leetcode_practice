// Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

/**
 * Count sorted keys
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let map = new Map();
    for (const str of strs) {
        let key = str.split('').sort().join('');
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    let ans = [];
    for (const [key, val] of map.entries()) {
        ans.push(val);
    }

    return ans;
};

/**
 * Count sorted keys
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length == 0) return [];
    let ans = {};
    for (let s of strs) {
        let count = Array(26).fill(0);
        for (let c of s) count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
        console.log(count.join(','));
        let key = "";
        for (let i = 0; i < 26; i++) {
            key += "#";
            key += count[i];
        }
        console.log(key);
        if (!ans[key]) ans[key] = [];
        ans[key].push(s);
    }
    return Object.values(ans);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));