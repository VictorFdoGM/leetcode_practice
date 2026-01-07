import java.util.ArrayDeque;
import java.util.Queue;

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
    public int maxLevelSum(TreeNode root) {
        
        Queue<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);

        int ans = 0;
        int maxSum = Integer.MIN_VALUE;
        int currRow = 1;
        while (!queue.isEmpty()) {
            int size = queue.size();
            int rowSum = 0;
            for (int i = 0; i < size; i++) {
                TreeNode curr = queue.remove();
                rowSum += curr.val;

                if (curr.left != null) {
                    queue.add(curr.left);
                }
                if (curr.right != null) {
                    queue.add(curr.right);
                }
            }

            if (rowSum > maxSum) {
                maxSum = rowSum;
                ans = currRow;
            }
            currRow++;
        }

        return ans;
    }
}