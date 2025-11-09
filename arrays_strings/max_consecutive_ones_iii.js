// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
    let left = 0;
    let flipped = 0;
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            flipped++;
        }

        while (flipped > k) {
            if (nums[left] == 0) {
                flipped--;
            }
            left++;
        }

        curr = Math.max(curr, i - left + 1);
    }

    return curr;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));