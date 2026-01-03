// Longest Subsequence With Limited Sum
// You are given an integer array nums of length n, and an integer array queries of length m.

// Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {

    let binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
    
    nums.sort((a, b) => a - b);
    let prefixSum = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = nums[i] + prefixSum[i - 1];   
    }

    let ans = [];
    for (let i = 0; i < queries.length; i++) {
        let index = binarySearch(prefixSum, queries[i]);
        if (prefixSum[index] == queries[i]) {
            ans[i] = index + 1;
        } else {
            ans[i] = index;
        }
    }
    return ans;
};

console.log(answerQueries([4,5,2,1], [3,10,21]));
console.log(answerQueries([2,3,4,5], [1]));