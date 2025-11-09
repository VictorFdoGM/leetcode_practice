// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    
    let arrSet = new Set(arr);
    let counter = 0;
    for (const element of arr) {
        if (arrSet.has(element + 1)) {
            counter++;
        }
    }
    return counter;
};