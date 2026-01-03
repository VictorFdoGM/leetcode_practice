// 863. All Nodes Distance K in Binary Tree
// Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

// You can return the answer in any order.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * My solution
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    
    let graph = new Map()
    let setGraph = (val) => {
        if (!graph.has(val)) {
            graph.set(val, []);
        }
    }
    let treeDfs = (root) => {
        if (!root) return;

        setGraph(root.val);

        if (root.left) {
            setGraph(root.left.val);
            graph.get(root.val).push(root.left.val);
            graph.get(root.left.val).push(root.val);
            treeDfs(root.left);
        }

        if (root.right) {
            setGraph(root.right.val);
            graph.get(root.val).push(root.right.val);
            graph.get(root.right.val).push(root.val);
            treeDfs(root.right);
        }
    }
    treeDfs(root);
    let seen = new Array(graph.size).fill(false);

    let graphBfs = (node) => {
        let queue = [node];
        let lvl = 0;

        while(queue.length) {

            if (lvl == k) {
                return queue;
            }

            lvl++;
            let currentLength = queue.length;
            let nextQueue = [];

            for (let i = 0; i < currentLength; i++) {
                seen[queue[i]] = true;
                let unseenNodes = graph.get(queue[i]).filter(item => !seen[item]);
                nextQueue.push(...unseenNodes);
            }

            

            queue = nextQueue;
        }

        return [];
    };

    seen[target.val] = true;
    return graphBfs(target.val);
};



/**
 * Leet code solution
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let dfs = (node, parent) => {
        if (!node) {
            return;
        }
        
        node.parent = parent;
        dfs(node.left, node);
        dfs(node.right, node);
    }
    
    dfs(root, null);
    let queue = [target];
    let seen = new Set([target]);
    let distance = 0;
    
    while (queue.length && distance < k) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currentLength; i++) {
            let node = queue[i];
            for (const neighbor of [node.left, node.right, node.parent]) {
                if (neighbor && !seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }
        
        queue = nextQueue;
        distance++;
    }
    
    return queue.map(node => node.val);
};