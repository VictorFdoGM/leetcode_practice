// Jump Game III
// Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.

// Notice that you can not jump outside of the array at any time.

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    
    let queue = [start];
    let seen = new Array(arr.length).fill(false);
    seen[start] = true;

    while(queue.length) {

        let nextQueue = [];

        for (let i = 0; i < queue.length; i++) {

            if (arr[queue[i]] == 0) return true;

            let posPlus = queue[i] + arr[queue[i]];
            let posMinus = queue[i] - arr[queue[i]];

            if (posPlus < arr.length && !seen[posPlus]) {
                seen[posPlus] = true;
                nextQueue.push(posPlus);
            }
            if (posMinus >= 0 && !seen[posMinus]) {
                seen[posMinus] = true;
                nextQueue.push(posMinus);
            }
        }

        queue = nextQueue;
    }

    return false;
};

console.log(canReach([4,2,3,0,3,1,2], 5));
console.log(canReach([4,2,3,0,3,1,2], 0));
console.log(canReach([3,0,2,1,2], 2));