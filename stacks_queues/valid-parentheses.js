// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let parentheses = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    let queue = [];

    for (let i = 0; i < s.length; i++) {
        
        if (parentheses[s[i]]) {
            queue.push(s[i]);
        } else {
            const lastElem = queue.pop();
            if (parentheses[lastElem] != s[i]) {
                return false;
            }
        }
    }

    return queue.length == 0;
};