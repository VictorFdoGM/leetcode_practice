// 752. Open the Lock
// You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

// The lock initially starts at '0000', a string representing the state of the 4 wheels.

// You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

// Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let neighbors = node => {
        let ans = [];
        for (let i = 0; i < 4; i++) {
            let num = node[i];
            for (const change of [-1, 1]) {
                let x = (+num + change + 10) % 10
                ans.push(node.slice(0, i) + x + node.slice(i + 1));
            }
        }
        
        return ans;
    }
    
    if (deadends.includes("0000")) {
        return -1;
    }
    
    let queue = ["0000"];
    let seen = new Set(deadends);
    seen.add("0000");
    
    let steps = 0;
    
    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currentLength; i++) {
            const node = queue[i];
            if (node == target) {
                return steps;
            }

            for (const neighbor of neighbors(node)) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }
        
        steps++;
        queue = nextQueue;
    }
    
    return -1;
};