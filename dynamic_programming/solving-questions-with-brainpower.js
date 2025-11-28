// 2140. Solving Questions With Brainpower
// You are given a 0-indexed 2D integer array questions where questions[i] = [pointsi, brainpoweri].

// The array describes the questions of an exam, where you have to process the questions in order (i.e., starting from question 0) and make a decision whether to solve or skip each question. Solving question i will earn you pointsi points but you will be unable to solve each of the next brainpoweri questions. If you skip question i, you get to make the decision on the next question.

// For example, given questions = [[3, 2], [4, 3], [4, 4], [2, 5]]:
// If question 0 is solved, you will earn 3 points but you will be unable to solve questions 1 and 2.
// If instead, question 0 is skipped and question 1 is solved, you will earn 4 points but you will be unable to solve questions 2 and 3.
// Return the maximum points you can earn for the exam.

/**
 * Top-down
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    
    let map = new Map();
    let dp = (i) => {
        if (i >= questions.length) return 0;

        if (map.has(i)) return map.get(i);

        let j = i + questions[i][1] + 1;
        map.set(i, Math.max(questions[i][0] + dp(j), dp(i + 1)));
        return map.get(i);
    }

    return dp(0);
};

/**
 * Bottom-up
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let n = questions.length;
    let dp = new Array(n + 1).fill(0); // n + 1 to avoid out of bounds
    
    for (let i = n - 1; i >= 0; i--) {
        let j = i + questions[i][1] + 1;
        // need to make sure we don't go out of bounds
        dp[i] = Math.max(questions[i][0] + dp[Math.min(j, n)], dp[i + 1]);
    }
    
    return dp[0];
};

console.log(mostPoints([[3,2],[4,3],[4,4],[2,5]]));
console.log(mostPoints([[1,1],[2,2],[3,3],[4,4],[5,5]]));