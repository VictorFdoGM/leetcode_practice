// Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let map = new Map();
    let dp = (i) => {

        if (i == 1) return 1;

        if (i == 2) return 2;

        if (map.has(i)) return map.get(i);

        map.set(i, dp(i - 1) + dp(i - 2));
        return map.get(i);

    }
    return dp(n);
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));