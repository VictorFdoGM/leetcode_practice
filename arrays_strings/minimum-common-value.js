// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    
    let nums1Index = 0;
    let nums2Index = 0;
    while (nums1Index < nums1.length && nums2Index < nums2.length) {

        if (nums1[nums1Index] == nums2[nums2Index]) {
            return nums1[nums1Index];
        } else if (nums1[nums1Index] < nums2[nums2Index]) {
            nums1Index++;
        } else {
            nums2Index++;
        }
    }

    return -1;
};