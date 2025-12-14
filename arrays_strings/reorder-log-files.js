// Reorder Log Files
// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    
    let letterLogs = [];
    let digitLogs = [];
    for (const element of logs) {
        let idx = element.indexOf(' ');
        let [first, secondPart] = [element.slice(0, idx), element.slice(idx + 1)];
        if (secondPart[0] >= '0' && secondPart[0] <= '9') {
            digitLogs.push(element);
        } else {
            letterLogs.push([first, secondPart]);
        }
    }
    
    letterLogs.sort((a, b) => {
        let res = a[1].localeCompare(b[1]);
        if (res == 0) {
            return a[0].localeCompare(b[0])
        }
        return res;
    });
    letterLogs = letterLogs.map(item => item.join(' '));
    return [...letterLogs, ...digitLogs];
};

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]));