// Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let left = new Array(height.length).fill(0);
    let right = new Array(height.length).fill(0);

    let maxLeft = 0;
    let maxRight = 0;
    for (let i = 0; i < height.length; i++) {
        left[i] = maxLeft;
        maxLeft = Math.max(maxLeft, height[i]);

        right[height.length - 1 - i] = maxRight;
        maxRight = Math.max(maxRight, height[height.length - 1 - i]);
    }

    let ans = 0;
    for (let i = 0; i < height.length; i++) {
        let min = Math.min(left[i], right[i]);

        if (min - height[i] > 0) {
            ans += min - height[i];
        }
    }
    return ans;
};

var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let ans = 0;
    let left_max = 0;
    let right_max = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            left_max = Math.max(left_max, height[left]);
            ans += left_max - height[left];
            left++;
        } else {
            right_max = Math.max(right_max, height[right]);
            ans += right_max - height[right];
            right--;
        }
    }
    return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));