// 530. Minimum Absolute Difference in BST
// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Recursive Inorder
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let dfs = node => {
        if (!node) {
            return;
        }
        
        dfs(node.left);
        values.push(node.val);
        dfs(node.right);
    }
    
    let values = [];
    dfs(root);
    let ans = Infinity;
    for (let i = 1; i < values.length; i++) {
        ans = Math.min(ans, values[i] - values[i - 1]);
    }
    
    return ans;
};

/**
 * Iterative Inorder
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let iterativeInorder = root => {
        let stack = [];
        let values = [];
        let curr = root;
        
        while (stack.length || curr) {
            if (curr) {
                stack.push(curr);
                curr = curr.left;
            } else {
                curr = stack.pop();
                values.push(curr.val);
                curr = curr.right;
            }
        }
        
        return values;
    }
    
    let values = iterativeInorder(root);
    let ans = Infinity;
    for (let i = 1; i < values.length; i++) {
        ans = Math.min(ans, values[i] - values[i - 1]);
    }
    
    return ans;
};