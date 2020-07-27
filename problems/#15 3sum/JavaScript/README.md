> [题目地址](https://leetcode-cn.com/problems/3sum/)

## 第一遍
### 思路
1. 暴力解法，循环出所有的情况
2. 就是简单的循环嵌套
3. 这样的话最后需要再处理重复的情况，所以这个办法走不通

### 代码（code1）
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len = nums.length;
    if (len < 3) {
        return [];
    }
    let retArr = [];
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            let twoSum = nums[i] + nums[j + i + 1];
            let left = -twoSum;
            for (let k = 0; k < len - i - 2; k++) {
                if (nums[k + i + 2] == left) {
                    retArr.push([nums[i], nums[k+i+2], nums[j+i+1]])
                }
            }
        }
    }
    return retArr;
};
```

### 优化
>  [参考文章](https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/)
### 思路
1. 首先对数组进行排序，排序后固定一个数 nums[i]nums[i]，再使用左右指针指向 nums[i]nums[i]后面的两端，数字分别为 nums[L]nums[L] 和 nums[R]nums[R]，计算三个数的和 sumsum 判断是否满足为 00，满足则添加进结果集
2. 如果 nums[i]nums[i]大于 00，则三数之和必然无法等于 00，结束循环
3. 如果 nums[i]nums[i] == nums[i-1]nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过
4. 当 sumsum == 00 时，nums[L]nums[L] == nums[L+1]nums[L+1] 则会导致结果重复，应该跳过，L++
5. 当 sumsum == 00 时，nums[R]nums[R] == nums[R-1]nums[R−1] 则会导致结果重复，应该跳过，R--


### 代码（code2）
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    const len = nums.length;
    if(nums == null || len < 3) return ans;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let L = i+1;
        let R = len-1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }        
    return ans;
};
```