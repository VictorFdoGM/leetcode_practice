// Maximum Frequency Stack
// Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

// Implement the FreqStack class:

// FreqStack() constructs an empty frequency stack.
// void push(int val) pushes an integer val onto the top of the stack.
// int pop() removes and returns the most frequent element in the stack.
// If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.

const { PriorityQueue } = require('@datastructures-js/priority-queue');

//First implementation Using MaxHeap and a map
var FreqStack = function() {
    this.index = 0;
    this.freqMap = new Map();
    this.maxHeap = new PriorityQueue((a, b) => {
        if (b[2] === a[2]) {
            return b[1] - a[1];
        } else {
            return b[2] - a[2];
        }
    })
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    let newFreq = 1;
    if (this.freqMap.has(val)) {
        newFreq = this.freqMap.get(val) + 1
    }
    this.freqMap.set(val, newFreq);
    this.maxHeap.enqueue([val, this.index, newFreq]);
    this.index++;
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let val = this.freqMap.get(this.maxHeap.front()[0])
    this.freqMap.set(this.maxHeap.front()[0], val - 1);
    return this.maxHeap.dequeue()[0];
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

//Second Implementationm using and frequence as index
var FreqStack = function() {
    this.data = [];
    this.freqMap = new Map();
    this.maxIndex = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    const freq = (this.freqMap.get(val) ?? 0) + 1;
    this.freqMap.set(val, freq);

    if (this.data[freq]) {
        this.data[freq].push(val);
    } else {
        this.data[freq] = [val];
    }

    this.maxIndex = Math.max(this.maxIndex, freq);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let maxFreqArray = this.data[this.maxIndex];
    let val = maxFreqArray.pop();
    this.freqMap.set(val, this.freqMap.get(val) - 1);
    if (maxFreqArray.length == 0) {
        this.maxIndex--;
    }
    return val;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */