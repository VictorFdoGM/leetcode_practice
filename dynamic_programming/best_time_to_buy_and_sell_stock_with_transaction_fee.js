// Best Time to Buy and Sell Stock with Transaction Fee

// You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

// Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

// Note:

// You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// The transaction fee is only charged once for each stock purchase and sale.


/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  
    let map = new Map();
    let dp = (i, holding) => {

        if (i == prices.length) {
            return 0;
        }

        let key = '' + i + holding;
        if (map.has(key)) return map.get(key);

        let ans = 0
        let skip = dp(i + 1, holding);
        if (holding) {
            let sell = Math.max(skip, prices[i] - fee + dp(i + 1, false));
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

/**
 * Optimized version O(1) Space DP
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let cash = 0;                  // not holding stock
    let hold = -prices[0];         // holding stock after buying day 0

    for (let i = 1; i < prices.length; i++) {
        cash = Math.max(cash, hold + prices[i] - fee);  // sell
        hold = Math.max(hold, cash - prices[i]);        // buy
    }

    return cash;
};


console.log(maxProfit([1,3,2,8,4,9], 2));
// console.log(maxProfit([1,3,7,5,10,3], 3));