"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Two_Sum = void 0;
function twoSum(nums, target) {
    const hMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in hMap) {
            return [hMap[target - nums[i]], i];
        }
        hMap[nums[i]] = i;
    }
    return [-1, -1];
}
;
function Two_Sum() {
    let nums = [2, 7, 11, 15];
    // let nums = [3,2,4]
    // let nums = [2,5,5,11]
    console.log(twoSum(nums, 9));
}
exports.Two_Sum = Two_Sum;
