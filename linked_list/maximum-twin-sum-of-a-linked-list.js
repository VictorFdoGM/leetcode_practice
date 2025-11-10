// 2130. Maximum Twin Sum of a Linked List
// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.

// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {

    if (head && head.next && head.next.next == null) {
        return head.val + head.next.val;
    }
    
    let slow = head;
    let fast = head;
    let prev = null;
    while(fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(1);

    let prevReverse = null;
    let curr = slow;
    while (curr) {
        let nextNode = curr.next; // first, make sure we don't lose the next node
        curr.next = prevReverse;         // reverse the direction of the pointer
        prevReverse = curr;              // set the current node to prev for the next node
        curr = nextNode;          // move on
    }
    prev.next = prevReverse;
   
    slow = head;
    fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let biggestSum = 0;
    fast = slow;
    slow = head;
    while(fast) {
        biggestSum = Math.max(biggestSum, slow.val + fast.val);
        slow = slow.next;
        fast = fast.next;
    }
    return biggestSum;
};

let d = new ListNode(1);
let c = new ListNode(2, d);
let b = new ListNode(4, c);
let a = new ListNode(5, b);

console.log(pairSum(a));