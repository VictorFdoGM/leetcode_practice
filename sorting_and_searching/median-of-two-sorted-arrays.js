// Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let ans = [...nums1, ...nums2];
    ans.sort((a, b) => a - b);
    if (ans.length % 2 == 1) {
        return ans[Math.floor(ans.length / 2)];
    } else {
        let i = ans.length / 2;
        return (ans[i - 1] + ans[i]) / 2
    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let a = nums1
    let b = nums2;
    let total = a.length + b.length;
    let half = Math.floor(total / 2);

    if (b.length < a.length) {
        a = nums2;
        b = nums1;
    }

    let left = 0;
    let right = a.length - 1;
    while (true) {
        let i = Math.floor((left + right) / 2);
        let j = half - i - 2;

        let Aleft = i >= 0 ? a[i] : -Infinity;
        let Aright = (i + 1) < a.length ? a[i + 1] : Infinity;
        let Bleft = j >= 0 ? b[j] : -Infinity;
        let Bright = (j + 1) < b.length ? b[j + 1] : Infinity;

        if (Aleft <= Bright && Bleft <= Aright) {

            if (total % 2 == 1) {
                return Math.min(Aright, Bright);
            }
            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
        } else if (Aleft > Bright) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
};

console.log(findMedianSortedArrays([1,3], [2]));