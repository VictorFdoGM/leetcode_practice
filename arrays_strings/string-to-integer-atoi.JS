// String to Integer (atoi)
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    
    let result = 0;
    let sign = 1;
    let n = s.length;

    let INT_MAX = Math.pow(2, 31) - 1;
    let INT_MIN = -Math.pow(2, 31);

    let i = 0;
    while(i < s.length && s[i] == ' ') {
        i++;
    }

    if (s[i] == '-') {
        sign = -1;
        i++;
    } else if (s[i] == '+') {
        sign = 1;
        i++;
    }

    while(i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        if (
            result > Math.floor(INT_MAX / 10) ||
            (result == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
        ) {
            // If integer overflowed return 2^31-1, otherwise if underflowed return -2^31.
            return sign == 1 ? INT_MAX : INT_MIN;
        }

        result = 10 * result + digit;
        i++;
    }

    return sign * result;
};

console.log(myAtoi("42"));