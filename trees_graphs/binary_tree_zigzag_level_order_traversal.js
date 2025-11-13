// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root == null) return [];

    let queue = [root];
    let reverseFlag = true;
    let ans = [[root.val]];
    while(queue.length) {
        let currLength = queue.length;

        // We could use nextQueue implementation so we don't have to perform shift since is more expensive
        let nextQueue = [];
        for (let i = 0; i < currLength; i++) {
            let node = queue[i]; 

            if(node.left) {
                queue.push(node.left);
                nextQueue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
                nextQueue.push(node.right);
            }
        }
        queue = nextQueue;
        if (nextQueue.length) {
            if (reverseFlag) {
                ans.push(nextQueue.map(item => item.val).reverse());
            } else {
                ans.push(nextQueue.map(item => item.val));
            }
        }
        reverseFlag = !reverseFlag;
    }
    return ans;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let a1 = new TreeNode(3);

console.log(zigzagLevelOrder(null));
console.log(zigzagLevelOrder(a1));