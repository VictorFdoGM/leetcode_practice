// Integer to Roman
// Seven different symbols represent Roman numerals with the following values:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

/**
 * Greedy approach
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];
    let roman = "";
    // Loop through each symbol, stopping if num becomes 0.
    for (let i = 0; i < values.length && num > 0; i++) {
        // Repeat while the current symbol still fits into num.
        while (values[i] <= num) {
            num -= values[i];
            roman += symbols[i];
        }
    }
    return roman;
};

/**
 * Hardcode Digits
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    let thousandsChar = ['', 'M', 'MM', 'MMM'];
    let hundredsChar = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let tensChar = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let onesChar = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    let thousands = Math.floor(num / 1000) // 0, 1, 2, 3 Thousand
    let hundreds = Math.floor((num % 1000) / 100) // 0,1,2,3,4,5,6,7,8,9 Hundreds;
    let tens = Math.floor((num % 100) / 10) // 0,1,2,3,4,5,6,7,8,9 Tens;
    let ones = (num % 10);

    return thousandsChar[thousands] + hundredsChar[hundreds] + tensChar[tens] + onesChar[ones];
};

console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(0));