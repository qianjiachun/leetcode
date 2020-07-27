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