// Cheapest Flights Within K Stops
// There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    // Build adjacency list
    let graph = {};
    for (const [u, v, w] of flights) {
        if (!graph[u]) graph[u] = [];
        graph[u].push([v, w]);
    }

    // Priority queue: [cost, node, stops]
    let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
    minHeap.enqueue([0, src, 0]);

    // dist[node][stops] = minimum cost to reach node with "stops"
    let dist = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));
    dist[src][0] = 0;

    while (!minHeap.isEmpty()) {
        const [cost, node, stops] = minHeap.dequeue();
        console.log('cost', cost, 'node', node, 'stops', stops);

        // If we reached destination, this is guaranteed minimum
        if (node === dst) return cost;

        // If we can still take flights
        if (stops <= k) {
            for (const [neighbor, price] of graph[node] || []) {
                const newCost = cost + price;

                // If this path is better given stop count
                if (newCost < dist[neighbor][stops + 1]) {
                    dist[neighbor][stops + 1] = newCost;
                    console.log('enqueue', newCost, neighbor, stops + 1);
                    minHeap.enqueue([newCost, neighbor, stops + 1]);
                }
            }
        }
    }

    return -1;
};

/**
 * Bellman ford
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dist = [];
    for (let i = 0; i < n; i++) {
        dist[i] = Infinity;
    }
    dist[src] = 0;

    for (let i = 0; i <= k; i++) {
        let newdist = [...dist];
        for (let j = 0; j < flights.length; j++) {
            const [start, end, edge] = flights[j];
            if (dist[start] + edge < newdist[end]) {
                newdist[end] = dist[start] + edge;
            }
        }
        dist = newdist;
    }

    return dist[dst] === Infinity ? -1 : dist[dst];
};

// console.log(findCheapestPrice(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1))

// console.log(findCheapestPrice(5, [[4,1,1],[1,2,3],[0,3,2],[0,4,10],[3,1,1],[1,4,3]], 2, 1, 1));

console.log(findCheapestPrice(5, [[0,1,5],[1,2,5],[0,3,2],[3,1,2],[1,4,1],[4,2,1]], 0, 2, 2));