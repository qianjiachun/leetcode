/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1, ...nums2].sort((a, b) => {return a - b});
    return newArr.length % 2 !== 0 ? newArr[parseInt(newArr.length / 2)] : (newArr[parseInt(newArr.length / 2) - 1] + newArr[parseInt(newArr.length / 2)]) / 2;
};