// Min Cost Climbing Stairs
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
    let map = new Map();
    let dp = (i) => {
        
        if (i == 0 || i == 1) return 0;

        if (map.has(i)) return map.get(i);
        
        map.set(i, Math.min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2]));
        return map.get(i);
    }

    return dp(cost.length);
};

console.log(minCostClimbingStairs([10,15,20]));
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));