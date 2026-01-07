import java.util.HashMap;

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
    int count = 0;
    int targetSum;
    HashMap<Long, Integer> map = new HashMap<>();

    public int pathSum(TreeNode root, int targetSum) {
        this.targetSum = targetSum;
        this.map.put(0L, 1);
        preorder(root, 0);
        return count;
    }
    
    public void preorder(TreeNode node, long currSum) {

        if (node == null) return;
        
        currSum += node.val;

        if (this.map.containsKey(currSum - this.targetSum)) {
            this.count += this.map.get(currSum - this.targetSum);
        }

        this.map.put(currSum, this.map.getOrDefault(currSum, 0) + 1);

        preorder(node.left, currSum);
        preorder(node.right, currSum);

        this.map.put(currSum, this.map.get(currSum) - 1);

    }
}