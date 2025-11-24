// 1481. Least Number of Unique Integers after K Removals
// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {

    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }

    let numFreq = [];
    for (const key in map) {
        numFreq.push([map[key], key]);
    }

    numFreq.sort((a, b) => {
        return a[0] - b[0];
    });

    let index = 0;
    for (let i = 0; i < numFreq.length; i++) {
        if (k - numFreq[i][0] >= 0) {
            k -= numFreq[i][0];
            index = i + 1;
        }
    }
    return numFreq.length - index;
};

console.log(findLeastNumOfUniqueInts([5,5,4], 1));