// Given an array of integers nums, you start with an initial positive value startValue.
// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

//Solution using Binary Search
var minStartValue = function(nums) {
    // Let n be the length of the array "nums", m be the absolute value 
    // of the lower boundary of the element. In this question we have m = 100.
    var n = nums.length;
    var m = 100;

    // Set left and right boundaries according to left = 1, right = m * n + 1.
    var left = 1;
    var right = m * n + 1;

    while (left < right) {
        // Get the middle index "middle" of the two boundaries, let the start value 
        // be "middle". The initial step-by-step total "total" equals to middle as well.
        // Use boolean parameter "isValid" to record whether the total 
        // is greater than or equal to 1.
        var middle = Math.floor((left + right) / 2);
        var total = middle;
        var isValid = true;

        // Iterate over the array "nums".
        for (const num of nums) {

            // In each iteration, calculate "total" plus the element "num" in the array.
            total += num;

            // If "total" is less than 1, we shall try a larger start value,
            // we mark "isValid" as "false" and break the current iteration.
            if (total < 1) {
                isValid = false;
                break;
            }
        }

        // Check if middle is valid, and reduce the search space by half.
        if (isValid) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }

    // When the left and right boundaries coincide, we have found
    // the target value, that is, the minimum valid startValue.
    return left;
}


/**
 * My solution
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {

    let startValue = nums[0] > 0 ? 1 : Math.abs(nums[0]) + 1;
    let curr = startValue;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        curr = curr + nums[i];
        if (curr <= 0) {
            startValue += Math.abs(curr) + 1;
            curr = 1;
        }
    }
    return startValue;
};

/**
 * Leet code solution
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    // We use "total" for current step-by-step total, "minVal" for minimum 
    // step-by-step total among all sums. Since we always start with 
    // startValue = 0, therefore the initial current step-by-step total is 0, 
    // thus we set "total" and "minVal" be 0. 
    var minVal = 0;
    var total = 0;

    // Iterate over the array and get the minimum step-by-step total.
    for (var i = 0; i < nums.length; ++i) {
        total += nums[i];
        minVal = Math.min(minVal, total);
    }

    // We have to let the minimum step-by-step total equals to 1, 
    // by increasing the startValue from 0 to -minVal + 1, 
    // which is just the minimum startValue we want.
    return -minVal + 1;
};


console.log(minStartValue([-3,2,-3,4,2]));
console.log(minStartValue([1,2]));
console.log(minStartValue([1,-2,-3]));
console.log(minStartValue([2,3,5,-5,-1]));