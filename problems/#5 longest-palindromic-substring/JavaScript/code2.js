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