// Integer to English Words
// Convert a non-negative integer num to its English words representation.

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {

    if (num == 0) return 'Zero';

    let ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    let thousands = ['', 'Thousand', 'Million', 'Billion'];

    let ans = [];
    while (num > 0) {
        let group = [];
        if (num % 1000 != 0) {
            let part = num % 1000;

            if (part >= 100) {
                let val = Math.floor(part / 100);
                group.push(ones[val], 'Hundred');
                part = num % 100;
            }

            if (part >= 20) {
                let val = Math.floor(part / 10);
                group.push(tens[val]);
                part = num % 10;
            }

            if (part > 0) {
                group.push(ones[part]);
            }
        }
        num = Math.floor(num / 1000);
        ans.push(group.join(' '));
    }
    let word = [];
    for (let i = ans.length - 1; i > 0; i--) {
        if (ans[i] == '') continue;
        word.push(ans[i] + ' ' + thousands[i]);
    }
    word.push(ans[0]);
    return word.join(' ').trim();
};


/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {

    if (num == 0) return 'Zero';

    let ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    let thousands = ['', 'Thousand', 'Million', 'Billion'];

    const convertBelowThousand = (n) => {
        const words = [];

        if (n >= 100) {
            words.push(ones[Math.floor(n / 100)], "Hundred");
            n %= 100;
        }

        if (n >= 20) {
            words.push(tens[Math.floor(n / 10)]);
            n %= 10;
        }

        if (n > 0) {
            words.push(ones[n]);
        }

        return words.join(" ");
    };

    const result = [];
    let i = 0;

    while (num > 0) {
        const part = num % 1000;
        if (part > 0) {
            const words = convertBelowThousand(part);
            result.unshift(
                thousands[i] ? `${words} ${thousands[i]}` : words
            );
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.join(" ");
};

console.log(`'${numberToWords(123)}'`);
console.log(`'${numberToWords(12345)}'`);
console.log(`'${numberToWords(1234567)}'`);
console.log(`'${numberToWords(20)}'`);
console.log(`'${numberToWords(1000000)}'`);