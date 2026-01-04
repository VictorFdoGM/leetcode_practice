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
    public int dfs(TreeNode root, int depth) {
        
        if (root == null) {
            return 0;
        }

        int leftDepth = dfs(root.left, depth) + 1;
        int rightDepth = dfs(root.right, depth) + 1;
        return Math.max(leftDepth, rightDepth);   
    }

    public int maxDepth(TreeNode root) {
        return dfs(root, 0);
    }
}

class Pair {
    TreeNode node;
    int depth;
    Pair(TreeNode node, int depth) {
        this.node = node;
        this.depth = depth;
    }
}

class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        Stack<Pair> stack = new Stack<>();
        stack.push(new Pair(root, 1));
        int ans = 0;
        
        while (!stack.isEmpty()) {
            Pair curr = stack.pop();

            ans = Math.max(curr.depth, ans);
            
            if (curr.node.left != null) {
                stack.push(new Pair(curr.node.left, curr.depth + 1));
            }

            if (curr.node.right != null) {
                stack.push(new Pair(curr.node.right, curr.depth + 1));
            }
        }
        
        return ans;
    }
}