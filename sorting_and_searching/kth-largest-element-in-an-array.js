// Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    let maxHeap = new PriorityQueue((a, b) => {
        return b - a;
    });

    for (const num of nums) {
        maxHeap.push(num);
    }

    for (let i = 0; i < k - 1; i++) {
        maxHeap.pop();
    }

    return maxHeap.pop();
};