// 3129. Find All Possible Stable Binary Arrays I
// You are given 3 positive integers zero, one, and limit.

// A binary array arr is called stable if:

// The number of occurrences of 0 in arr is exactly zero.
// The number of occurrences of 1 in arr is exactly one.
// Each subarray of arr with a size greater than limit must contain both 0 and 1.
// Return the total number of stable binary arrays.

// Since the answer may be very large, return it modulo 109 + 7.

/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
    const MOD = 1e9 + 7;
    const dp0 = Array.from({ length: zero + 1 }, () => Array(one + 1).fill(0));
    const dp1 = Array.from({ length: zero + 1 }, () => Array(one + 1).fill(0));

    for (let i = 1; i <= Math.min(zero, limit); i++) {
        dp0[i][0] = 1;
    }
    for (let j = 1; j <= Math.min(one, limit); j++) {
        dp1[0][j] = 1;
    }

    console.log('dp0');
    printMatrix(dp0)
    console.log('dp1');
    printMatrix(dp1);

    // Fill DP tables
    for (let i = 0; i <= zero; i++) {
        for (let j = 0; j <= one; j++) {
            if (i === 0 && j === 0) continue;

            // Build ending with 0
            for (let k = 1; k <= Math.min(limit, i); k++) {
                dp0[i][j] = (dp0[i][j] + dp1[i - k][j]) % MOD;
            }

            // Build ending with 1
            for (let k = 1; k <= Math.min(limit, j); k++) {
                dp1[i][j] = (dp1[i][j] + dp0[i][j - k]) % MOD;
            }
        }
    }

    console.log('dp0');
    printMatrix(dp0)
    console.log('dp1');
    printMatrix(dp1);

    return (dp0[zero][one] + dp1[zero][one]) % MOD;
};

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) { // Iterate through rows
    let rowString = "";
    for (let j = 0; j < matrix[i].length; j++) { // Iterate through elements in the current row
      rowString += matrix[i][j] + " "; // Add element to the row string with a space
    }
    console.log(rowString); // Print the completed row string
  }
}

console.log(numberOfStableArrays(3, 3, 2));