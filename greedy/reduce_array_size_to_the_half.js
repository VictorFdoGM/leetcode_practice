// Reduce Array Size to The Half
// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }

    let nums = [];
    for (const key in map) {
        nums.push(map[key]);
    }
    nums.sort((a, b) => b - a);

    let length = arr.length / 2;
    
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {

        if (length <= 0) {
            break;
        }

        ans = i + 1;
        length -= nums[i];
    }
    return ans;
};

console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]));
console.log(minSetSize([7,7,7,7,7,7]));
console.log(minSetSize([1,9]));