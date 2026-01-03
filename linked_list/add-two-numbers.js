// Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let root = new ListNode(0);
    let curr = root;
    let carry = 0;
    while (l1 != null || l2 != null || carry != 0) {
        let num1 = l1 ? l1.val : 0;
        let num2 = l2 ? l2.val : 0;
        let sum = num1 + num2 + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return root.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * First attempt
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let l1curr = l1;
    let l2curr = l2;
    let ansRoot = null;
    let ansCurr = ansRoot;
    let carry = 0;

    while(l1curr && l2curr) {
        const val = l1curr.val + l2curr.val + carry;
        if (val / 10 >= 1) {
            carry = 1;
        } else {
            carry = 0;
        }
        if (ansCurr) {
            ansCurr.next = new ListNode(val % 10);
            ansCurr = ansCurr.next;
        } else {
            ansRoot = new ListNode(val % 10);
            ansCurr = ansRoot;
        }
        l1curr = l1curr.next;
        l2curr = l2curr.next;
    }

    let rem = l1curr || l2curr;
    while(rem) {
        let val = rem.val + carry;
        if (Math.floor(val / 10) > 0) {
            carry = 1;
        } else {
            carry = 0;
        }
        ansCurr.next = new ListNode(val % 10);
        ansCurr = ansCurr.next;
        rem = rem.next;
    }

    if (carry) {
        ansCurr.next = new ListNode(carry);
    }

    return ansRoot;
};