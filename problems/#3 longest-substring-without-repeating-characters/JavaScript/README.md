> [题目地址](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/)

## 第一遍
### 思路
1. 肯定要把文本进行拆分，拆分出所有不同的子文本
2. 再取最大长度的子文本即可
3. 按照这个思路，首先要对字符串进行逐字遍历，**并用map存储这个字最后一次出现的位置**
4. 将遍历过的字存到变量result，到下一轮循环的时候判断当前的字是否存在于result
5. 如果不存在，就继续追加到result尾部，如果存在就到map中找这个字最后一次出现的位置，然后取那个位置+1直到当前位置的文本
6. 逐个输出result，即可得到所有的子文本

### 代码（code1）
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let result = "";
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (result.indexOf(s[i]) == -1) {
            result += s[i];
        } else {
            if (result.length > maxLen) {
                maxLen = result.length;
            }
            result = s.substring(map[s[i]] + 1, i+1);
        }
        map[s[i]] = i;
    }
    if (result.length > maxLen) {
        maxLen = result.length;
    }
    return maxLen;
};
```

## 优化
### 思路
1. 使用 map 来存储当前已经遍历过的字符，key 为字符，value 为下标
2. 使用 i 来标记无重复子串开始下标，j 为当前遍历字符下标
3. 遍历字符串，判断当前字符是否已经在 map 中存在，存在则更新无重复子串开始下标 i 为相同字符的下一位置，此时从 i 到 j 为最新的无重复子串，更新max ，将当前字符与下标放入 map 中
4. 最后，返回 max 即可

### 代码（code2）
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), max = 0
    for(let i = 0, j = 0; j < s.length; j++) {
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i)
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max
};

```

