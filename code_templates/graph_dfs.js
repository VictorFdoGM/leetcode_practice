// Graph: DFS (recursive)
let fn = graph => {
    let dfs = node => {
        let ans = 0;
        // do some logic
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                ans += dfs(neighbor);
            }
        }

        return ans;
    }

    let seen = new Set([START_NODE]);
    return dfs(START_NODE);
}

// Graph: DFS (iterative)
let fn = graph => {
    let stack = [START_NODE];
    let seen = new Set([START_NODE]);
    let ans = 0;

    while (stack.length) {
        let node = stack.pop();
        // do some logic
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                stack.push(neighbor);
            }
        }
    }

    return ans;
}