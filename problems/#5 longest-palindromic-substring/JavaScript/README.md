> [题目地址](https://leetcode-cn.com/problems/longest-palindromic-substring/)

## 第一遍
### 思路
1. 遍历每一个字符，用hash存储字符出现的位置
2. 当首位相同时，则开始计算长度
3. 返回长度最大的那一个字符串
4. 由于没有理解回文字符串的意思，所以这个代码是错误的，没有达到需求

### 代码（code1）
```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let map = {};
    let max = 0;
    let str = "";
    let ret = "";

    for (let i = 0; i < s.length; i++) {
        let prevOffset = map[s[i]];
        if (prevOffset !== undefined) {
            let len = i + 1 - prevOffset;
            if (len > 2) {
                if (len > max) {
                    str = s.substring(prevOffset, i + 1)
                    if (isPalindrome(str)) {
                        max = str.length;
                        ret = str;
                    }
                } 
            } else {
                str += s.substring(prevOffset, prevOffset + 1);
                if (str.length > max) {
                    if (isPalindrome(str)) {
                        max = str.length;
                        ret = str;
                    }
                }
            }
        } else {
            str = s[i];
        }
        map[s[i]] = i;
    }

    if (ret == "") {
        ret = s[0] || "";
    }
    return ret;
};


function isPalindrome(s) {
    let r = s.split("").reverse().join("");
    if (r == s) {
        return true;
    } else {
        return false;
    }
}

```


## 优化
> [参考](https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-zhong-xin-kuo-zhan-fa-2/)
### 思路
1. 使用的是中心扩展法
2. 中心扩展法的思想如下
```
回文串一定是对称的
    每次选择一个中心，进行中心向两边扩展比较左右字符是否相等
    中心点的选取有两种
        aba，中心点是b
        aa，中心点是两个a之间
所以共有两种组合可能
    left：i，right：i
    left：i，right：i+1
```
3. 分奇偶遍历判断即可

### 代码（code2）
```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = 0;
    let ret = "";
    for (let i = 0; i < s.length; i++) {
        let str1 = getStr(s, i, i); // 奇数
        let str2 = getStr(s, i, i+1); // 偶数
        let tmp = 0;
        if (str1.length > str2.length) {
            tmp = str1.length;
            if (tmp > max) {
                max = tmp;
                ret = str1;
            }
        } else {
            tmp = str2.length;
            if (tmp > max) {
                max = tmp;
                ret = str2;
            }
        }
    }
    return ret;
};

function getStr(s, i, j) {
    if (s[i] !== s[j]) {
        return "";
    }
    while(i >= 0 && j < s.length && s[i] == s[j]) {
        i--;
        j++;
    }
    return s.substring(i + 1, j);
}
```