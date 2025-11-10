// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    let curr = head;
    let prevNode = null;
    while (curr) {

        if (prevNode && prevNode.val == curr.val) {
            prevNode.next = curr.next;
        } else {
            prevNode = curr;
        }
        curr = curr.next; 
    }

    return head;
};