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
