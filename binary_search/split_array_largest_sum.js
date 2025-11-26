// Split Array Largest Sum
// Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

// Return the minimized largest sum of the split.

// A subarray is a contiguous part of the array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {

    let check = (maxAllowed) => {
        let count = 1;
        let curr = 0;

        for (let num of nums) {
            if (curr + num > maxAllowed) {
                count++;
                curr = num;
                if (count > k) return false;
            } else {
                curr += num;
            }
        }
        return true;
    }
    
    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b);

    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

console.log(splitArray([7,2,5,10,8], 2));
console.log(splitArray([1,2,3,4,5], 2));
console.log(splitArray([1,4,4], 3));