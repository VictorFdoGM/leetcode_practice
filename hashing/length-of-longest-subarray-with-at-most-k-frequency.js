// 2958. Length of Longest Subarray With at Most K Frequency
// You are given an integer array nums and an integer k.
// The frequency of an element x is the number of times it occurs in an array.
// An array is called good if the frequency of each element in this array is less than or equal to k.
// Return the length of the longest good subarray of nums.
// A subarray is a contiguous non-empty sequence of elements within an array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    
    let left = 0;
    let res = 0;
    let frequencyMap = {};
    for (let i = 0; i < nums.length; i++) {
        
        if (frequencyMap[nums[i]] + 1 > k) {

            while(nums[left] != nums[i]) {
                frequencyMap[nums[left]]--;
                left++
            }
            left++;
        } else {
            frequencyMap[nums[i]] = (frequencyMap[nums[i]] || 0) + 1;
        }

        res = Math.max(res, i - left + 1);
    }

    return res;
};