// Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

/**
 * Valid but Time Limit Exceeded
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while(i < j) {
        let val = numbers[i] + numbers[j];

        if (val == target) return [i + 1, j + 1];
        if (val < target) {
            i++;
        } else {
            j--;
        }
    }
}

/**
 * Valid but Time Limit Exceeded
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(numbers, target) {
    
    for (let i = 0; i < numbers.length - 1; i++) {
        let j = i + 1;

        while (numbers[i] + numbers[j] <= target) {
            let val = numbers[i] + numbers[j];
            if (val == target) return [i + 1, j + 1];

            j++;
        }
        
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));
console.log(twoSum([-10,-8,-2,1,2,5,6], 0));