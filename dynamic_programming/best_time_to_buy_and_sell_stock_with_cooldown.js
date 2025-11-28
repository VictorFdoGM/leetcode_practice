// Best Time to Buy and Sell Stock with Cooldown
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
    let map = new Map();
    let dp = (i, holding) => {

        if (i >= prices.length) {
            return 0;
        }

        let key = '' + i + holding;
        if (map.has(key)) return map.get(key);

        let ans = 0
        let skip = dp(i + 1, holding);
        if (holding) {
            let sell = Math.max(skip, prices[i] + dp(i + 2, false));
            ans = sell;
        } else {
            let buy = Math.max(skip, -prices[i] + dp(i + 1, true));
            ans = buy;
        }
        map.set(key, ans);
        return ans;
    }

    return dp(0, false);
};

console.log(maxProfit([1,2,3,0,2]));
console.log(maxProfit([1]));