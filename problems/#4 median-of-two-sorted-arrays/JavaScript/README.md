> [题目地址](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

## 第一遍
### 思路
1. 因为要取两个数组的中位数
2. 首先要合并数组
3. 然后对合起来的数组进行排序
4. 然后根据奇偶取出中位数即可
5. 这样的时间复杂度虽然不符合要求，但是可以通过

### 代码（code1）
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1, ...nums2].sort((a, b) => {return a - b});
    return newArr.length % 2 !== 0 ? newArr[parseInt(newArr.length / 2)] : (newArr[parseInt(newArr.length / 2) - 1] + newArr[parseInt(newArr.length / 2)]) / 2;
};
```