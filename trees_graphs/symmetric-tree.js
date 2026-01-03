// Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    let left = root.left;
    let right = root.right;

    let compare = (nodeA, nodeB) => {
        if (!nodeA && !nodeB) return true;

        if (!nodeA || !nodeB) return false;

        if (nodeA.val != nodeB.val) return false;

        return compare(nodeA.left, nodeB.right) && compare(nodeB.left, nodeA.right);
    }

    return compare(left, right);
};