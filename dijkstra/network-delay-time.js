// 743. Network Delay Time
// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let heap = new PriorityQueue((a, b) => {
        return a[0] - b[0];
    });

    let graph = {};
    for (const [u, v, w] of times) {
        if (graph[u] == undefined) {
            graph[u] = [];    
        }
        graph[u].push([v, w]);
    }

    let distances = new Array(n + 1).fill(Infinity);
    distances[k] = 0;
    heap.enqueue([0, k]);

    while(!heap.isEmpty()) {
        let curr = heap.dequeue();
        let currDist = curr[0];
        let node = curr[1];

        if (currDist > distances[node] || !graph[node]) continue;

        for (const edge of graph[node]) {
            let neighbor = edge[0];
            let weight = edge[1];
            let dist = currDist + weight;

            if (dist < distances[neighbor]) {
                distances[neighbor] = dist;
                heap.enqueue([dist, neighbor]);
            }
        }
    }

    console.log(distances);
    let ans = Math.max(...distances.slice(1));
    return ans === Infinity ? -1 : ans;
};


console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2));