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