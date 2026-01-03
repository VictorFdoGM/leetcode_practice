/**
 * Top-down
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    let dp = (i, remain) => {
        if (i == piles.length || remain == 0) {
            return 0;
        }
        
        if (memo[i][remain] != -1) {
            return memo[i][remain];
        }
        
        let ans = dp(i + 1, remain); // Skip this pile
        let curr = 0;
        for (let j = 0; j < Math.min(remain, piles[i].length); j++) {
            console.log(i, j);
            curr += piles[i][j];
            ans = Math.max(ans, curr + dp(i + 1, remain - j - 1));
        }
        
        memo[i][remain] = ans;
        return ans;
    }
    
    let memo = [];
    for (let i = 0; i < piles.length; i++) {
        memo.push(new Array(k + 1).fill(-1));
    }
    
    return dp(0, k);
};

/**
 * Bottom up
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    let n = piles.length;
    let dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push(new Array(k + 1).fill(0));
    }
    
    for (let i = n - 1; i >= 0; i--) {
        for (let remain = 1; remain <= k; remain++) {
            dp[i][remain] = dp[i + 1][remain]; // skip this pile
            let curr = 0;
            for (let j = 0; j < Math.min(remain, piles[i].length); j++) {
                curr += piles[i][j];
                dp[i][remain] = Math.max(dp[i][remain], curr + dp[i + 1][remain - j - 1]);
            } 
        }
    }
    
    return dp[0][k];
};

console.log(maxValueOfCoins([[1,100,3],[7,8,9]], 2));