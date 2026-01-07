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

class SolutionDFS {

    int ans = 0;

    public int rangeSumBST(TreeNode root, int low, int high) {
        dfs(root, low, high);
        return this.ans;
    }

    public void dfs (TreeNode root, int low, int high) {

        if (root == null) return;

        if (low <= root.val && root.val <= high) {
            this.ans += root.val;
        }

        dfs(root.left, low, high);
        dfs(root.right, low, high);
    }
}

class Solution {

    public int rangeSumBST(TreeNode root, int low, int high) {
        return dfs(root, low, high);
    }

    public int dfs (TreeNode root, int low, int high) {

        if (root == null) return 0;

        int ans = 0;
        if (low <= root.val && root.val <= high) {
            ans += root.val;
        }

        if (low < root.val) {
            ans += dfs(root.left, low, high);
        }
        if (root.val < high) {
            ans += dfs(root.right, low, high);
        }

        return ans;
    }
}