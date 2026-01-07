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
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<List<Integer>> pathsList = new ArrayList<List<Integer>>();
        List<Integer> pathNodes = new ArrayList<Integer>();
        dfs(root, targetSum, pathNodes, pathsList);
        return pathsList;
    }

    public void dfs (TreeNode node, int remainingSum, List<Integer> pathNodes, List<List<Integer>> pathsList) {
        if (node == null) return;

        pathNodes.add(node.val);

        if (node.left == null && node.right == null && node.val - remainingSum == 0) {
            pathsList.add(new ArrayList<>(pathNodes));
        } else {
            dfs(node.left, remainingSum - node.val, pathNodes, pathsList);
            dfs(node.right, remainingSum - node.val, pathNodes, pathsList);
        }

        pathNodes.removeLast();
    }
}