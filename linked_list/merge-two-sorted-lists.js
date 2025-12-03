// Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * First implementation
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    if (list1 == null && list2 == null) return null;

    let root = new ListNode();
    let curr = root;
    while(list1 && list2) {    
        if (list1.val <= list2.val) {
            curr.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            curr.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        curr = curr.next;
    }

    let remaining = list1 || list2;
    while(remaining) {
        curr.next = new ListNode(remaining.val);
        remaining = remaining.next;
        curr = curr.next;
    }
    return root.next;
};

/**
 * Moving Pointers
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    let prehead = new ListNode(-1);
    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    if (l1 != null) {
        prev.next = l1;
    } else {
        prev.next = l2;
    }
    return prehead.next;
}