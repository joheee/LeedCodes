"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinatorialSum = void 0;
function combinationSum(candidates, target) {
    let res = [];
    function dfs(i, curr, total) {
        if (total === target) {
            res.push([...curr]);
            return;
        }
        if (i >= candidates.length || total > target)
            return;
        curr.push(candidates[i]);
        dfs(i, curr, total + candidates[i]);
        curr.pop();
        dfs(i + 1, curr, total);
    }
    dfs(0, [], 0);
    return res;
}
;
function CombinatorialSum() {
    console.log(combinationSum([2, 3, 6, 7], 7));
}
exports.CombinatorialSum = CombinatorialSum;
