// Find Median from Data Stream
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

//Time Limit Exceeded

var MedianFinder = function() {
    this.stream = [];  
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.stream.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    this.stream.sort((a, b) => {
        return a - b;
    });

    let mid = Math.floor(this.stream.length / 2);
    if (this.stream.length % 2 == 0) {
        return (this.stream[mid - 1] + this.stream[mid]) / 2
    } else {
        return this.stream[mid];
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */