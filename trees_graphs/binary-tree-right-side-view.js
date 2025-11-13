// 199. Binary Tree Right Side View
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root == null) return [];

    let ans = [];
    let queue = [root];

    while(queue.length) {
        let currLength = queue.length;
        ans.push(queue[queue.length - 1].val);
        for (let i = 0; i < currLength; i++) {
            let node = queue.shift();

            if(node.left) {
                queue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
            }
            
        }
    }
    return ans;
};