// Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort((a, b) => a[0] - b[0]);
    let left = 0;
    let ans = [intervals[left]];
    for (let i = 1; i < intervals.length; i++) {
        if (ans[left][1] >= intervals[i][0]) {
            ans[left][1] = Math.max(ans[left][1], intervals[i][1]);
        } else {
            ans.push(intervals[i]);
            left++;
        }
        
    }
    return ans;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[4,7],[1,4]]));