// Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let prefix = [];
    let postfix = new Array(nums.length);

    prefix[0] = nums[0];
    postfix[nums.length - 1] = nums[nums.length - 1];

    let j = nums.length - 1;
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = nums[i] * prefix[i - 1];
        postfix[j - 1] = nums[j - 1] * postfix[j];
        j--;
    }

    for (let i = 0; i < nums.length; i++) {
        let pre = prefix[i - 1] != undefined ? prefix[i - 1] : 1;
        let post = postfix[i + 1] != undefined ? postfix[i + 1] : 1;

        nums[i] = pre * post;
    }
    return nums;
};


var productExceptSelf = function(nums) {
    let n = nums.length;
    let result = new Array(n);

    // Step 1: prefix products
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    console.log(result);

    // Step 2: postfix products
    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }
    return result;
};


console.log(productExceptSelf([1,2,3,4]));