// Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

// A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

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
var maxAncestorDiff = function(root) {

    if (root == null) return 0;
    let res = 0;

    var helper = function (node, curMax, curMin) {
        if (node == null) return;

        res = Math.max(res, Math.abs(curMax - node.val), Math.abs(curMin - node.val));

        curMax = Math.max(curMax, node.val);
        curMin = Math.min(curMin, node.val);
        helper(node.left, curMax, curMin);
        helper(node.right, curMax, curMin);
    }
    helper(root, root.val, root.val);

    return res;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {

    if (root == null) return 0;

    var helper = function (node, curMax, curMin) {
        if (node == null) return curMax - curMin;

        curMax = Math.max(curMax, node.val);
        curMin = Math.min(curMin, node.val);
        let left = helper(node.left, curMax, curMin);
        let right = helper(node.right, curMax, curMin);
        return Math.max(left, right);
    }
    return helper(root, root.val, root.val);
};