import java.util.Stack;

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

class SolutionRecursive {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        return dfs(root, targetSum, 0);
    }

    public boolean dfs (TreeNode root, int targetSum, int currSum) {

        if (root == null) return false;

        if (null == root.left && null == root.right && targetSum == root.val + currSum) {
            return true;
        }

        return dfs(root.left, targetSum, currSum + root.val) ||
            dfs(root.right, targetSum, currSum + root.val);
    }
}

class Pair {
    TreeNode node;
    int currSum;
    Pair(TreeNode node, int currSum) {
        this.node = node;
        this.currSum = currSum;
    }
}

class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;

        Stack<Pair> stack = new Stack<>();
        stack.push(new Pair(root, 0));

        while (!stack.isEmpty()) {
            Pair curr = stack.pop();
            TreeNode node = curr.node;
            int currSum = curr.currSum;

            if (node.left == null && node.right == null && node.val + currSum == targetSum) {
                return true;
            }

            if (node.left != null) {
                stack.push(new Pair(node.left, currSum + node.val));
            }
            if (node.right != null) {
                stack.push(new Pair(node.right, currSum + node.val));
            }
        }

        return false;
    }
}