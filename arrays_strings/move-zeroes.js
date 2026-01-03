// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let j = 0;
    for (let i = 0; i < nums.length && j + 1 < nums.length; i++) {
        j = i;
        while (nums[j] == 0 && j + 1 < nums.length) {
            j++;
        }

        if (nums[i] == 0) {
            let aux = nums[i];
            nums[i] = nums[j];
            nums[j] = aux;
        }
    }

    return nums;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertPos = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    // Fill the rest with zeros
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([1,0]));
console.log(moveZeroes([0,1]));
console.log(moveZeroes([0,0]));