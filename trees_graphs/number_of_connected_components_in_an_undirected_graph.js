// Number of Connected Components in an Undirected Graph
// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    
    var dfs = function (node) {
        for (let i = 0; i < graph.get(node).length; i++) {
            const element = graph.get(node)[i];
            if (!seen[element]) {
                seen[element] = true;
                dfs(element);
            }
        }
    }

    let graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }

    for (let i = 0; i < edges.length; i++) {
        graph.get(edges[i][0]).push(edges[i][1]);
        graph.get(edges[i][1]).push(edges[i][0]);
    }

    let seen = new Array(n).fill(false);

    let components = 0;
    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            components++;
            dfs(i);
        }
    }

    return components;
};

console.log(countComponents(5, [[0,1],[1,2],[3,4]]));