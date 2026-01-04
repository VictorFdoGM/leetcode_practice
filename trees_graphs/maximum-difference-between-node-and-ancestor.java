/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {

    int ans = 0;

    public int maxAncestorDiff(TreeNode root) {
        dfs(root, root.val, root.val);
        return this.ans;
    }

    public void dfs(TreeNode node, int min, int max) {

        if (node == null) return;

        this.ans = Math.max(this.ans, Math.abs(node.val - min));
        this.ans = Math.max(this.ans, Math.abs(node.val - max));

        min = Math.min(min, node.val);
        max = Math.max(max, node.val);
        dfs(node.left, min, max);
        dfs(node.right, min, max);
    }
}