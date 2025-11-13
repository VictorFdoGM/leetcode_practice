// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

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
var minDepth = function (root) {
    // Define the depth-first search
    function dfs(root) {
        if (root === null) {
            return 0;
        }
        // If only one of child is non-null, then go into that recursion.
        if (root.left === null) {
            return 1 + dfs(root.right);
        } else if (root.right === null) {
            return 1 + dfs(root.left);
        }
        // Both children are non-null, hence call for both children.
        return 1 + Math.min(dfs(root.left), dfs(root.right));
    }
    return dfs(root);
};