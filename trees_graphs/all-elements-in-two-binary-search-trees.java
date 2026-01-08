import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;
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

class Solution2 {

    List<Integer> ans = new ArrayList<>();
    Queue<Integer> queue = new PriorityQueue<>((a, b) -> Integer.compare(a, b));

    public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {
        dfs(root1);
        dfs(root2);
        List<Integer> res = new ArrayList<>();
        while (!queue.isEmpty()) res.add(queue.poll());
        return res;
    }

    public void dfs(TreeNode node) {

        if (node == null) return;

        dfs(node.left);
        queue.add(node.val);
        dfs(node.right);
    }
}

class Solution {
  public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {
    ArrayDeque<TreeNode> stack1 = new ArrayDeque<>(), stack2 = new ArrayDeque<>();
    List<Integer> output = new ArrayList<>();

    while (root1 != null || root2 != null || !stack1.isEmpty() || !stack2.isEmpty()) {
      // update both stacks
      // by going left till possible
      while (root1 != null) {
        stack1.push(root1);
        root1 = root1.left;
      }
      while (root2 != null) {
        stack2.push(root2);
        root2 = root2.left;
      }

      // Add the smallest value into output,
      // pop it from the stack,
      // and then do one step right
      if (stack2.isEmpty() || !stack1.isEmpty() && stack1.getFirst().val <= stack2.getFirst().val) {
        root1 = stack1.pop();
        output.add(root1.val);
        root1 = root1.right;
      }
      else {
        root2 = stack2.pop();
        output.add(root2.val);
        root2 = root2.right;
      }
    }
    return output;
  }
}