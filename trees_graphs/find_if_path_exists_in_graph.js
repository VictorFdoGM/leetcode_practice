// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    if (source == destination) return true;

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
    dfs(source);

    return seen[destination];

};