// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

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
var diameterOfBinaryTree = function(root) {

    let diameter = 0;
    var dfs = function (node) {

        if (node == null) return -1;

        let leftPath = dfs(node.left);
        let rightPath = dfs(node.right);

        // console.log('node', node.val, leftPath, rightPath);

        diameter = Math.max(diameter, leftPath + rightPath + 2);

        return (Math.max(leftPath, rightPath)) + 1;
    }
    dfs(root);
    return diameter;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let a2 = new TreeNode(2);
let a1 = new TreeNode(1, a2);

console.log(diameterOfBinaryTree(a1));