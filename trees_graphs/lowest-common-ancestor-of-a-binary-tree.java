/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
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
    
    TreeNode ans = null;
    
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        recurseTree(root, p, q);
        return this.ans;
        
    }

    public boolean recurseTree(TreeNode node, TreeNode p, TreeNode q) {

        if (node == null) return false;

        int left = recurseTree(node.left, p, q) ? 1 : 0;
        int right = recurseTree(node.right, p, q) ? 1 : 0;
        int mid = (node == p || node == q) ? 1 : 0;
        
        if (mid + left + right >= 2) {
            this.ans = node;
        }

        return (mid + left + right > 0);
    }
}

class Solution2 {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) {
            return null;
        }

        // first case
        if (root == p || root == q) {
            return root;
        }

        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);

        // second case
        if (left != null && right != null) {
            return root;
        }

        // third case
        if (left != null) {
            return left;
        }

        return right;
    }
}