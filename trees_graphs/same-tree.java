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
    public boolean isSameTree(TreeNode p, TreeNode q) {
        
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;

        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}

class Pair {
    TreeNode p;
    TreeNode q;
    Pair(TreeNode p, TreeNode q) {
        this.p = p;
        this.q = q;
    }
}

class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        
        if (p == null && q == null) return true;

        Stack<Pair> stack = new Stack<>();
        stack.push(new Pair(p, q));

        while (!stack.isEmpty()) {
            Pair curr = stack.pop();

            if (curr.p == null && curr.q == null) continue;
            if (curr.p == null || curr.q == null) return false;
            if (curr.p.val != curr.q.val) return false;

            stack.push(new Pair(curr.p.left, curr.q.left));
            stack.push(new Pair(curr.p.right, curr.q.right));
        }

        return true;
    }
}