let fn = arr => {
    let dp = STATE => {
        if (BASE_CASE) {
            return 0;
        }

        if (memo[STATE] != -1) {
            return memo[STATE];
        }

        let ans = RECURRENCE_RELATION(STATE);
        memo[STATE] = ans;
        return ans;
    }

    let memo = ARRAY_SIZED_ACCORDING_TO_STATE;
    return dp(STATE_FOR_WHOLE_INPUT);
}

// To convert a top-down solution to a bottom-up one:

// Initialize an array 
// dp
// dp that is sized according to the state variables. For example, let's say the input to the problem was an array 
// nums
// nums and an integer 
// k
// k that represents the maximum number of actions allowed. Your array 
// dp
// dp would be 2D with one dimension of length 
// nums.length
// nums.length and the other of length 
// k
// k. In the top-down approach, we had a function dp. We want these two to be equivalent. For example, the value of dp(4, 6) can now be found in dp[4][6].

// Set your base cases, same as the ones you are using in your top-down function. In the example we just looked at, we had dp(0) = dp(1) = 0. We can initialize our dp array values to 0 to implicitly set this base case. As you'll see soon, other problems will have more complicated base cases.

// Write a for-loop(s) that iterate over your state variables. If you have multiple state variables, you will need nested for-loops. These loops should start iterating from the base cases and end at the answer state.

// Now, each iteration of the inner-most loop represents a given state, and is equivalent to a function call to the same state in top-down. Copy-paste the logic from your function into the for-loop and change the function calls to accessing your array. All 
// dp(...)
// dp(...) changes into 
// dp[...]
// dp[...].

// We're done! 
// dp
// dp is now an array populated with the answer to the original problem for all possible states. Return the answer to the original problem, by changing 
// return dp(...)
// return dp(...) to 
// return dp[...]
// return dp[...].