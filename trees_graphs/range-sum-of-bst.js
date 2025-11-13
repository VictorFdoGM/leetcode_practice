// 938. Range Sum of BST
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Recursive approach
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    if (!root) return 0;

    let ans = 0;
    if(root.val >= low && root.val <= high) {
        ans += root.val;
    }

    if (low < root.val) {
        ans += rangeSumBST(root.left, low, high);
    }

    if (high > root.val) {
        ans += rangeSumBST(root.right, low, high);
    }

    return ans;
};

/**
 * Iterative approach
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let stack = [root]; 
    let ans = 0;
    while (stack.length) {
        let node = stack.pop();
        if (low <= node.val && node.val <= high) {
            ans += node.val;
        }
        if (node.left && low < node.val) {
            stack.push(node.left);
        }
        if (node.right && node.val < high) {
            stack.push(node.right);
        }
    }

    return ans;
};