// 515. Find Largest Value in Each Tree Row
// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (root == null) return [];

    let ans = [];
    let queue = [root];

    while(queue.length) {
        let currLength = queue.length;
        let maxVal = -Infinity;
        // We could use nextQueue implementation so we don't have to perform shift since is more expensive
        // let nextQueue = [];

        for (let i = 0; i < currLength; i++) {
            let node = queue.shift();
            // let node = queue[i]; 

            maxVal = Math.max(maxVal, node.val);

            if(node.left) {
                queue.push(node.left);
                // nextQueue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
                // nextQueue.push(node.right);
            }
        }
        ans.push(maxVal);
        // queue = nextQueue;
    }
    return ans;
};