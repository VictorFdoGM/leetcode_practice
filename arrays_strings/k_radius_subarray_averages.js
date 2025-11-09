// You are given a 0-indexed array nums of n integers, and an integer k.
// The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.
// Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
// The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.
// For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.

/**
 * My solution
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {

    let prefixArray = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixArray[i] = nums[i] + prefixArray[i - 1]; 
    }

    let averages = Array(nums.length).fill(-1);
    for (let i = k; i < nums.length - k; i++) {
        let kRadiusSum = prefixArray[i + k] - (prefixArray[i - k - 1] || 0);
        averages[i] = Math.floor(kRadiusSum / (k * 2 + 1));
    }

    return averages;
};

/**
 * Leetcode solution
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    // When a single element is considered then its average will be the number itself only.
    if (k === 0) {
        return nums;
    }
    
    const windowSize = 2 * k + 1
    const n = nums.length;
    const averages = new Array(n).fill(-1);

    // Any index will not have 'k' elements in its left and right.
    if (windowSize > n) {
        return averages;
    }

    // Generate 'prefix' array for 'nums'.
    // 'prefix[i + 1]' will be sum of all elements of 'nums' from index '0' to 'i'.
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    
    // We iterate only on those indices which have at least 'k' elements in their left and right.
    // i.e. indices from 'k' to 'n - k'
    for (let i = k; i < (n - k); ++i) {
        const leftBound = i - k, rightBound = i + k;
        const subArraySum = prefix[rightBound + 1] - prefix[leftBound];
        const average = Math.floor(subArraySum / windowSize);
        averages[i] = average;
    }

    return averages;
};

console.log(getAverages([7,4,3,9,1,8,5,2,6], 3));