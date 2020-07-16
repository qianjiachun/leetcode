> [题目地址](https://leetcode-cn.com/problems/two-sum/)


## 第一遍
### 思路
1. 数组成员两两相加，再对target进行对比
2. 两次遍历

### 代码（code1）
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (nums[i] + nums[j + i + 1] == target) {
                return [i, j + i + 1];
            }
        }
    }
};
```



## 优化
### 思路
通过查看他人的更优解，发现还可以使用hash表的方法来实现，最终性能提升很明显  
思路如下：
1. 用hash记录下每一个访问过的数字，k:值 v:索引
2. 计算出与当前的数字的差值
3. 到hash表里去寻找有没有这个数字，有的话就返回两个索引
4. 如果没有的话就把k-v存入hash表
- 注意一定要先判断再存入，否则会将当前数值也算进去

### 代码
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] != undefined) {
            let offset = map[target - nums[i]]
            return [offset, i]
        }
        map[nums[i]] = i;
    }
};
```

