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
    public int longestZigZag(TreeNode root) {
        dfs(root, null, 0);
        return ans;
    }

    public void dfs(TreeNode node, String direction, int sum) {
        if (node == null) return;

        this.ans = Math.max(this.ans, sum);

        dfs(node.left, "left", "left".equals(direction) ? 1 : sum + 1);
        dfs(node.right, "right", "right".equals(direction) ? 1 : sum + 1);
    }
}