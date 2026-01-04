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
    int counter = 0;
    public int goodNodes(TreeNode root) {
        dfs(root, Double.NEGATIVE_INFINITY);
        return counter;
    }

    public void dfs(TreeNode node, Double prevVal) {

        if (node == null) return;

        if (prevVal <= node.val) {
            counter++;
        }

        dfs(node.left, Math.max(prevVal, node.val));
        dfs(node.right, Math.max(prevVal, node.val));
    }
}

class Pair {
    TreeNode node;
    Double prevVal;
    Pair(TreeNode node, Double prevVal) {
        this.node = node;
        this.prevVal = prevVal;
    }
}

class Solution {
    public int goodNodes(TreeNode root) {
        int counter = 0;
        
        if (root == null) return 0;

        Stack<Pair> stack = new Stack<>();
        stack.push(new Pair(root, Double.NEGATIVE_INFINITY));

        while (!stack.isEmpty()) {
            Pair curr = stack.pop();
            TreeNode node = curr.node;
            Double prevVal = curr.prevVal;

            if (prevVal <= node.val) {
                counter++;
            }

            if (node.left != null) {
                stack.push(new Pair(node.left, Math.max(prevVal, node.val)));
            }
            if (node.right != null) {
                stack.push(new Pair(node.right, Math.max(prevVal, node.val)));
            }
        }

        return counter;
    }
}