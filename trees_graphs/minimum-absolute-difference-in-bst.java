import java.util.ArrayList;
import java.util.List;

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
    
    List<Integer> values = new ArrayList<>();
    
    public int getMinimumDifference(TreeNode root) {
        dfs(root);
        int minDiff = Integer.MAX_VALUE;
        for (int i = 1; i < this.values.size(); i++) {
            int diff = Math.abs(this.values.get(i - 1) - this.values.get(i));
            minDiff = Math.min(minDiff, diff);
        }
        return minDiff;
    }

    public void dfs(TreeNode node) {

        if (node == null) return;

        dfs(node.left);
        this.values.add(node.val);
        dfs(node.right);
    }
}