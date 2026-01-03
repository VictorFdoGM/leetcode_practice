// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (head === null) {
        return null;
    }
    let cur = head;
    let prev = null;
    while (left > 1) {
        prev = cur;
        cur = cur.next;
        left--;
        right--;
    }
    let con = prev;
    let tail = cur;
    let swap = null;
    
    while (right > 0) {
        swap = cur.next;
        cur.next = prev;
        prev = cur;
        cur = swap;
        right--;
    }
    if (con !== null) {
        con.next = prev;
    } else {
        head = prev;
    }
    tail.next = cur;
    return head;
};

let a = new ListNode(5);
let b = new ListNode(4, a);
let c = new ListNode(3, b);
let d = new ListNode(2, c);
let e = new ListNode(1, d);

console.log(reverseBetween(e, 2, 4));