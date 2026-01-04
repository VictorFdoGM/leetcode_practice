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

class Solution2 {

    int minDepth = Integer.MAX_VALUE;

    public int minDepth(TreeNode root) {
        dfs(root, 0);
        return this.minDepth == Integer.MAX_VALUE ? 0 : this.minDepth;
    }
    public void dfs(TreeNode node, int depth) {

        if (node == null) return;

        if (node.left == null && node.right == null) {
            this.minDepth = Math.min(this.minDepth, depth + 1);
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
}

class Solution {

    public int minDepth(TreeNode root) {

        if (root == null) return 0;

        if (root.left == null) {
            return 1 + minDepth(root.right);
        } else if (root.right == null) {
            return 1 + minDepth(root.left);
        }

        return 1 + Math.min(minDepth(root.left), minDepth(root.right));
    }
}