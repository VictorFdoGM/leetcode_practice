// All Paths From Source to Target
// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

/**
 * My first solution
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    let dfs = (node, path) => {
        
        path.push(node);

        for (const element of graph[node]) {
            dfs(element, [...path]);
        }
        if (node == graph.length - 1) {
            paths.push(path);
        }

    }
    let paths = [];
    dfs(0, []);

    return paths;
};

/**
 * Using backtrack
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {

    let paths = [];
    let target = graph.length - 1;

    let dfs = (node, path) => {
        path.push(node);

        if (node === target) {
            paths.push([...path]);  // Save a copy
        } else {
            for (const next of graph[node]) {
                dfs(next, path);
            }
        }

        path.pop(); // Backtrack
    };

    dfs(0, []);

    return paths;
};

console.log(allPathsSourceTarget([[1,2],[3],[3],[]]));
console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]));