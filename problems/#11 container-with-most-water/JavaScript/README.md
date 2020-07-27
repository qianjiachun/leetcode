> [题目地址](https://leetcode-cn.com/problems/container-with-most-water/)

## 第一遍
### 思路
1. 首先想到的肯定是暴力法
2. 也就是列举出所有的情况，计算出最大的面积

### 代码（code1）
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length < 2) {
        return 0;
    }
    let len = height.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
        let a = height[i];
        for (let j = 0; j < len - i - 1; j++) {
            let b = height[j + i + 1];
            let y = Math.min(a,b);
            let x = j + 1;
            if (x * y > max) {
                max = x * y;
            }
        }
    }
    return max;
};
```


## 优化
> [参考文章](https://leetcode-cn.com/problems/container-with-most-water/solution/container-with-most-water-shuang-zhi-zhen-fa-yi-do/)

### 思路
1. 用的是双指针法
2. 从数组的两端往中间逼近
3. 因为面积的大小主要由最短柱子的高度决定
4. 所以当左边的柱子高度小于右边时，就往右移
5. 同理右边柱子小于左边时就往右移，同时计算最大面积
6. 直到两个指针相遇循环结束，也就枚举出了所有情况

### 代码（code2）
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    while(i < j) {
        if (height[i] < height[j]) {
            max = Math.max(max, height[i] * (j - i));
            i++;
        } else {
            max = Math.max(max, height[j] * (j - i));
            j--;
        }
    }
    return max;
};
```