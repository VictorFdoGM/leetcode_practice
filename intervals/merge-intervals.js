// 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = [];
    
    for (const [start, end] of intervals) {
        if (ans.length && start <= ans[ans.length - 1][1]) {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], end);
        } else {
            ans.push([start, end]);
        }
    }
    
    return ans;
};