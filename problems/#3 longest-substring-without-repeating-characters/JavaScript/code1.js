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