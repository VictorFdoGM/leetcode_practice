// Detonate the Maximum Bombs
// You are given a list of bombs. The range of a bomb is defined as the area where its effect can be felt. This area is in the shape of a circle with the center as the location of the bomb.

// The bombs are represented by a 0-indexed 2D integer array bombs where bombs[i] = [xi, yi, ri]. xi and yi denote the X-coordinate and Y-coordinate of the location of the ith bomb, whereas ri denotes the radius of its range.

// You may choose to detonate a single bomb. When a bomb is detonated, it will detonate all bombs that lie in its range. These bombs will further detonate the bombs that lie in their ranges.

// Given the list of bombs, return the maximum number of bombs that can be detonated if you are allowed to detonate only one bomb.

/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    
    const n = bombs.length;
    const graph = Array.from({ length: n }, () => []);

    for (let i = 0; i < n; i++) {
        const [x1, y1, r1] = bombs[i];

        for (let j = 0; j < n; j++) {
            if (i === j) continue; // a bomb can't trigger itself

            const [x2, y2] = bombs[j];

            // compute squared distance
            const dx = x1 - x2;
            const dy = y1 - y2;
            const distSquared = dx * dx + dy * dy;

            // no sqrt for performance
            if (distSquared <= r1 * r1) {
                graph[i].push(j); // i can trigger j
            }
        }
    }


    let maxBombs = 1;
    for (let i = 0; i < graph.length; i++) {
        let bombsDetonated = 1;
        let seen = new Array(n).fill(false);
        let queue = [i];
        seen[i] = true;

        while(queue.length) {

            let nextQueue = [];
            for (let j = 0; j < queue.length; j++) {
                
                for (const node of graph[queue[j]]) {
                    if (!seen[node]) {
                        seen[node] = true;
                        nextQueue.push(node);
                        bombsDetonated++;
                    }
                }
            }
            queue = nextQueue;
        }
        maxBombs = Math.max(maxBombs, bombsDetonated);
    }

    return maxBombs;
};

console.log(maximumDetonation([[2,1,3],[6,1,4]]));
console.log(maximumDetonation([[1,1,5],[10,10,5]]));
console.log(maximumDetonation([[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]));