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