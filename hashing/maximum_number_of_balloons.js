// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.


/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    
    let wordMap = {}
    for (const element of text) {
        wordMap[element] = (wordMap[element] || 0) + 1;
    }

    let balloon = 'balloon';
    let targetMap = {};
    for (const element of balloon) {
        targetMap[element] = (targetMap[element] || 0) + 1;
    }

    let maxWord = Infinity;
    for (const key in targetMap) {
        if (wordMap[key] == undefined) {
            maxWord = 0;
            break;
        }
        
        maxWord = Math.min(maxWord, Math.floor(wordMap[key] / targetMap[key]));
    }

    return maxWord == Infinity ? 0 : maxWord;
};

console.log(maxNumberOfBalloons('nlaebolko')); //1
console.log(maxNumberOfBalloons('loonbalxballpoon')); //2
console.log(maxNumberOfBalloons('leetcode')); //0
console.log(maxNumberOfBalloons('nllbblooon')); //0