// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Implement the MovingAverage class:

// MovingAverage(int size) Initializes the object with the size of the window size.
// double next(int val) Returns the moving average of the last size values of the stream.

/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.queue = [];
    this.averageSum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    
    if (this.queue.length == this.size) {
        this.averageSum -= this.queue[0];
        this.queue.shift();
    }
    this.averageSum += val;
    this.queue.push(val);

    return this.averageSum / this.queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */