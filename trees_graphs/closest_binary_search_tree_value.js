// Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target. If there are multiple answers, print the smallest.

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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    
    if (!root) return 0;

    let minDiff = Infinity;
    let minTarget = root.val;

    var dfs = function (node) {

        if (!node) return;

        const diff = Math.abs(node.val - target);
        if (diff < minDiff || (diff === minDiff && node.val < minTarget)) {
            minDiff = diff;
            minTarget = node.val;
        }

        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return minTarget;
};

/**
 * Binary Search Implementation
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closest = root.val;

    while (root) {
        if (Math.abs(root.val - target) < Math.abs(closest - target) ||
            (Math.abs(root.val - target) === Math.abs(closest - target) && root.val < closest)) {
            closest = root.val;
        }

        if (target < root.val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return closest;
};