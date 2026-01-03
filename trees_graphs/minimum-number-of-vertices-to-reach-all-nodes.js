// 1557. Minimum Number of Vertices to Reach All Nodes
// Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

// Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

// Notice that you can return the vertices in any order.

// A node cannot be reached from another node if it has an indegree of 0 (no edges are entering the node). Therefore, we can just find the indegree of all nodes and only include the ones with a zero indegree.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let indegree = new Array(n).fill(0);
    for (const [x, y] of edges) {
        indegree[y]++;
    }
    
    let ans = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] == 0) {
            ans.push(i);
        }
    }
    
    return ans;
};