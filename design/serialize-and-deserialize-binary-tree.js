// Serialize and Deserialize Binary Tree
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

    if (!root) return [];

    let queue = [root];
    let ans = [];
    while(queue.length > 0) {

        node = queue.shift();
        ans.push(node ? node.val : node);

        if (!node) continue;
        
        queue.push(node.left);
        queue.push(node.right);
    }
    return ans;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data.length == 0) return null;
    let root = new TreeNode(data[0]);
    let curr = root;
    let queue = [curr];
    let i = 1;
    while(queue.length > 0 && i < data.length) {
        const curr = queue.shift();
        
        if (data[i] != null && data[i] != undefined) {
            curr.left = new TreeNode(data[i]);
            queue.push(curr.left);
        }
        i++;

        if (i < data.length && data[i] != null && data[i] != undefined) {
            curr.right = new TreeNode(data[i]);
            queue.push(curr.right);
        }
        i++;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */