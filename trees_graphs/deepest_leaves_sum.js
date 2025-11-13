// Given the root of a binary tree, return the sum of values of its deepest leaves.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if (root == null) return [];

    let queue = [root];
    let maxVal = 0;
    while(queue.length) {
        let currLength = queue.length;
        maxVal = 0;
        // We could use nextQueue implementation so we don't have to perform shift since is more expensive
        // let nextQueue = [];

        for (let i = 0; i < currLength; i++) {
            let node = queue.shift();
            // let node = queue[i]; 

            maxVal = maxVal + node.val;

            if(node.left) {
                queue.push(node.left);
                // nextQueue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
                // nextQueue.push(node.right);
            }
        }
        // queue = nextQueue;
    }
    return maxVal;
};