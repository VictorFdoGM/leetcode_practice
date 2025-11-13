// 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys strictly less than the node's key.
// The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * My code submission
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if (!root) return true;

    let isValid = true;

    if (min >= root.val || root.val >= max) return false;

    if (root.left) {
        isValid = isValid && isValidBST(root.left, min, root.val);
    }

    if (root.right) {
        isValid = isValid && isValidBST(root.right, root.val, max);
    }

    return isValid;
};

/**
 * Leetcode submission
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const dfs = (node, min, max) => {
        if (!node) {
            return true;
        }

        if (node.val <= min) {
            return false;
        }

        if (node.val >= max) {
            return false;
        }

        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }

    return dfs(root, -Infinity, Infinity);
};