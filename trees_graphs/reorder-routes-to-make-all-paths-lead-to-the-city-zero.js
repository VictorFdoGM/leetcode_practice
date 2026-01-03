// 1466. Reorder Routes to Make All Paths Lead to the City Zero

// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.
// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.
// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.
// It's guaranteed that each city can reach city 0 after reorder.

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let convertToHash = (row, col) => {
        return row + "," + col;
    }
    
    let dfs = node => {
        let ans = 0;
        for (const neighbor of graph.get(node)) {
            if (!seen[neighbor]) {
                if (roads.has(convertToHash(node, neighbor))) {
                    ans++;
                }
                
                seen[neighbor] = true;
                ans += dfs(neighbor);
            }
        }
        
        return ans;
    }
    
    let roads = new Set();
    let graph = new Map();
    let seen = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for (const [x, y] of connections) {
        graph.get(x).push(y);
        graph.get(y).push(x);
        roads.add(convertToHash(x, y));
    }
    
    seen[0] = true;
    return dfs(0);
};