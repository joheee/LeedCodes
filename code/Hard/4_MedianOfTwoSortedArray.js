"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedianOfTwoSortedArray = void 0;
function findMedianSortedArrays(nums1, nums2) {
    let concat = nums1.concat(nums2);
    concat.sort((a, b) => a - b);
    console.log(concat);
    let res = 0;
    if (concat.length % 2 === 0) {
        res = concat[concat.length / 2] + concat[concat.length / 2 - 1];
        res = res / 2;
    }
    else {
        res = concat[Math.floor(concat.length / 2)];
        res = res;
    }
    return res;
}
;
function MedianOfTwoSortedArray() {
    let nums1 = [-2, -1];
    let nums2 = [3];
    console.log(findMedianSortedArrays(nums1, nums2));
}
exports.MedianOfTwoSortedArray = MedianOfTwoSortedArray;
