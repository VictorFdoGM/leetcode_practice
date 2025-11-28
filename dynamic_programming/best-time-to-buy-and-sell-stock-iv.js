// 188. Best Time to Buy and Sell Stock IV
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

// Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

/**
 * Top-down
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {

    let map = new Map();
    let dp = (i, holding, remain) => {

        if (i == prices.length || remain == 0) return 0;

        let key = '' + i + holding + remain;

        if(map.has(key)) return map.get(key);

        let ans = 0;
        let skip = dp(i + 1, holding, remain);
        if (holding) {
            let buy = Math.max(skip, prices[i] + dp(i + 1, false, remain - 1));
            ans = buy;
        } else {
            let sell = Math.max(skip, -prices[i] + dp(i + 1, true, remain));
            ans = sell;
        }

        map.set(key, ans);
        return ans;
    }

    return dp(0, 0, k);
};

/**
 * Bottom-up
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let n = prices.length;
    let dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push([]);
        for (let j = 0; j < 2; j++) {
            dp[i].push(new Array(k + 1).fill(0));
        }
    }
    
    for (let i = n - 1; i >= 0; i--) {
        for (let remain = 1; remain <= k; remain++) {
            for (let holding = 0; holding < 2; holding++) {
                let ans = dp[i + 1][holding][remain];
                if (holding == 1) {
                    ans = Math.max(ans, prices[i] + dp[i + 1][0][remain - 1]);
                } else {
                    ans = Math.max(ans, -prices[i] + dp[i + 1][1][remain]);
                }
                
                dp[i][holding][remain] = ans;
            }
        }
    }
    
    return dp[0][0][k];
};

console.log(maxProfit(2, [2,4,1]));
console.log(maxProfit(2, [3,2,6,5,0,3]));