import "../../../common/ListNode/ListNode";
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let plus = 0;
    let z = 0;
    let ret = new ListNode(null);
    let tmp = ret;
    while(l1 || l2 || plus) {
        let x = 0;
        let y = 0;
        if (l1 != null) {
            x = l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            y = l2.val;
            l2 = l2.next;
        }
        if (x + y + plus >= 10) {
            z = x + y - 10 + plus;
            plus = 1;
        } else {
            z = x + y + plus;
            plus = 0;
        }
        tmp = tmp.next = new ListNode(z);
    }

    return ret.next;
};


