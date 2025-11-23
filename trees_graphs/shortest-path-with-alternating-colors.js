// 1129. Shortest Path with Alternating Colors
// You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

// You are given two arrays redEdges and blueEdges where:

// redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
// blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
// Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    let addToGraph = (color, edges) => {
        for (let i = 0; i < n; i++) {
            graph.get(color).set(i, []);
        }
        
        for (const [x, y] of edges) {
            graph.get(color).get(x).push(y);
        }
    }
    
    const RED = 0;
    const BLUE = 1;
    
    let graph = new Map();
    graph.set(RED, new Map());
    graph.set(BLUE, new Map());
    addToGraph(RED, redEdges);
    addToGraph(BLUE, blueEdges);
    
    let ans = new Array(n).fill(Infinity);
    let queue = [[0, RED], [0, BLUE]];
    let seen = [];
    for (let i = 0; i < n; i++) {
        seen.push(new Array(2).fill(false));
    }
    
    seen[0][RED] = true;
    seen[0][BLUE] = true;
    
    let steps = 0;
    
    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currentLength; i++) {
            let [node, color] = queue[i];
            ans[node] = Math.min(ans[node], steps);

            for (const neighbor of graph.get(color).get(node)) {
                if (!seen[neighbor][1 - color]) {
                    seen[neighbor][1 - color] = true;
                    nextQueue.push([neighbor, 1 - color]);
                }
            }
        }
        
        queue = nextQueue;
        steps++;
    }
    
    for (let i = 0; i < n; i++) {
        if (ans[i] == Infinity) {
            ans[i] = -1;
        }
    }
    
    return ans;
};