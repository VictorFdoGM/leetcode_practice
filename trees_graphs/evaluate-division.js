// 399. Evaluate Division
// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

// Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let answerQuery = (start, end) => {
        // no info on this node
        if (!graph.has(start)) {
            return -1;
        }
        
        let seen = new Set([start]);
        let stack = [[start, 1]];
        
        while (stack.length) {
            const [node, ratio] = stack.pop();
            if (node == end) {
                return ratio;
            }
            
            if (graph.has(node)) {
                for (const [neighbor, val] of graph.get(node)) {
                    if (!seen.has(neighbor)) {
                        seen.add(neighbor);
                        stack.push([neighbor, ratio * val]);
                    }
                }
            }
        }
        
        return -1;
    }
    
    let graph = new Map();
    for (let i = 0; i < equations.length; i++) {
        const [numerator, denominator] = equations[i];
        const val = values[i];
        if (!graph.has(numerator)) {
            graph.set(numerator, new Map());
        }
        if (!graph.has(denominator)) {
            graph.set(denominator, new Map());
        }
        
        graph.get(numerator).set(denominator, val);
        graph.get(denominator).set(numerator, 1 / val);
    }
    
    let ans = [];
    for (const [numerator, denominator] of queries) {
        ans.push(answerQuery(numerator, denominator));
    }
    
    return ans;
};