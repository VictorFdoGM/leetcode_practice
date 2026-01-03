// Hamming Distance
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    let xor = x ^ y;
    let distance = 0;

    while(xor != 0) {
        if (xor % 2 == 1) {
            distance++;
        }
        xor = xor >> 1;
    }
    return distance;
};