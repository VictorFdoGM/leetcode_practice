// Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    const set = new Set(coins);
    let map = new Map();
    let dp = (i) => {

        if (i == 0) return 0;
        
        if (set.has(i)) return 1;
        
        if (map.has(i)) return map.get(i);

        let ans = Infinity;
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] < i) {
                const val = dp(i - coins[j]);
                ans = Math.min(ans, val + 1);
            }
            
        }
        
        map.set(i, ans);
        return ans;
    };

    let ans = dp(amount);
    return ans == Infinity ? -1 : ans;
};

console.log(coinChange([1,2,5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));