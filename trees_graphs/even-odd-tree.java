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
    public boolean isEvenOddTree(TreeNode root) {
        
        Queue<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);

        boolean evenFlag = true;

        while (!queue.isEmpty()) {
            int size = queue.size();
            int prevVal = evenFlag ? 0 : Integer.MAX_VALUE;

            for (int i = 0; i < size; i++) {
                TreeNode node = queue.remove();

                if (node.val % 2 == (evenFlag ? 0 : 1)) return false;
                if (evenFlag && node.val <= prevVal) return false;
                if (!evenFlag && node.val >= prevVal) return false;

                prevVal = node.val;

                if(node.left != null) {
                    queue.add(node.left);
                }
                if(node.right != null) {
                    queue.add(node.right);
                }
            }
            evenFlag = !evenFlag;
        }

        return true;
    }
}