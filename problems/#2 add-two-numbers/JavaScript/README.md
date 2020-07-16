> [题目地址](https://leetcode-cn.com/problems/add-two-numbers/)

## 第一遍
### 思路
1. 这道题个人觉得转换成数组再进行位相加比较合适
2. 首先把每一个链表都遍历一遍，转换成数组
3. 然后让这两个数组的成员两两相加并进位，得到新的数组
4. 最后把这个新的数组转换成链表即可

### 代码（code1）
```js
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

```

## 优化
### 思路
1. 参考他人答案后，发现中间可以完全舍去转换成数组这一步
2. 就是直接用原先push的值进行两两相加
3. 这样就可以加快不少速度，并减少代码量

### 代码（code2）
```js
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

```

### 体会
1. 返回链表需要使用如下代码
```js
let ret = new ListNode(null);
let tmp = ret; 
tmp = tmp.next = new ListNode(z);
return ret.next
```
2. 遍历两个链表时，可以使用如下代码
```js
while(l1 || l2) {
    if (l1 != null) {
        x = l1.val;
        l1 = l1.next;
    }
    if (l2 != null) {
        y = l2.val;
        l2 = l2.next;
    }
}
```
3. 在判断进位的时候，我原先是在while循环外再对最后一次plus的值进行判断，然后再考虑是否再进一位，例如`1 + 9 -> 9`的时候，应该是`0 -> 0 -> 1`，要多一位
4. 改进后可以直接写成`while(l1 || l2 || plus)`，这样就会对plus的值进行判断，如果为1就会再循环一次。如此可以减少代码量