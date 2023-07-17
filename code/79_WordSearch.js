"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordSearch = void 0;
function FindIndex(board, target) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === target)
                return {
                    i: i,
                    j: j
                };
        }
    }
    return {
        i: -99,
        j: -99
    };
}
function exist(board, word) {
    let wordQueue = word.split('');
    let root = FindIndex(board, wordQueue[0]);
    if (root.i === -99 || root.j === -99)
        return false;
    return true;
}
;
function WordSearch() {
    let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
    let word = "ABCCED";
    console.log(exist(board, word));
}
exports.WordSearch = WordSearch;
