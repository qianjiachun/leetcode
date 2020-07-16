import "../../../modules/ListNode/ListNode";
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
    let list1 = [];
    let list2 = [];
    let plus = 0;
    let z = 0;
    let ret = new ListNode(null);
    let tmp = ret;
    while(l1 || l2) {
        list1.push(l1.val || 0)
        l1 = l1.next || 0;
        list2.push(l2.val || 0)
        l2 = l2.next || 0;
    }

    let num = list1.length > list2.length ? list1.length : list2.length;
    
    for (let i = 0; i < num + 1; i++) {
        let x = list1[i] || 0;
        let y = list2[i] || 0;
        if (x + y + plus >= 10) {
            z = x + y - 10 + plus;
            plus = 1;
        } else {
            z = x + y + plus;
            plus = 0;
        }
        if (i > num - 1) {
            if (z !== 0) {
                tmp = tmp.next = new ListNode(z);
            }
        } else if(i < num) {
            tmp = tmp.next = new ListNode(z);
        }
        
    }
    return ret.next;
};
