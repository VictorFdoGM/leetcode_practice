// There is an undirected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

// You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree. You are also given an integer array restricted which represents restricted nodes.

// Return the maximum number of nodes you can reach from node 0 without visiting a restricted node.

// Note that node 0 will not be a restricted node.


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    
    let restrictedSet = new Set(restricted);

    let dfs = (node) => {
        let count = 0;
        for (let i = 0; i < graph.get(node).length; i++) {
            const element = graph.get(node)[i];
            if (!restrictedSet.has(element) && !seen[element]) {
                seen[element] = true;
                count += dfs(element);
            }
        }
        return count + 1;
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
    seen[0] = true;
    let maxNodes = dfs(0);
    return maxNodes;
};

// console.log(reachableNodes(7, [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], [4, 5]));
console.log(reachableNodes(10, [[8,2],[2,5],[5,0],[2,7],[1,7],[3,8],[0,4],[3,9],[1,6]], [9,8,4,5,3,1]));