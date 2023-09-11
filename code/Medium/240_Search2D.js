"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search2DCol = void 0;
function searchMatrix(matrix, target) {
    let left = 0;
    let right = matrix.length *
    ;
}
;
function Search2DCol() {
    let matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
    let target = 3;
    console.log(searchMatrix(matrix, target));
}
exports.Search2DCol = Search2DCol;
