// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) {
        return 0;
    }

    let ans = 0, left = 0;
    let curr = 1;

    for (let i = 0; i < nums.length; i++) {
        curr = curr * nums[i];

        while (curr >= k) {
            curr = curr / nums[left];
            left++;
        }
        ans += i - left + 1;
    }

    return ans;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));