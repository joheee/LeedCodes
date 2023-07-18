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
function IsIndexSame(root, neighbour) {
    if (root.i === neighbour.i && root.j === neighbour.j)
        return true;
    return false;
}
function IsValidChildren(board, neighbour) {
    let leftBound = -1;
    let rightBound = board.length;
    let topBound = -1;
    let bottomBound = board[0].length;
    if (neighbour.i === leftBound || neighbour.i === rightBound)
        return false;
    if (neighbour.j === topBound || neighbour.j === bottomBound)
        return false;
    return true;
}
function FindChild(board, root) {
    let arr = [];
    // console.log(root)
    let leftNeighbour = {
        i: root.i,
        j: root.j - 1
    };
    let rightNeighbour = {
        i: root.i,
        j: root.j + 1
    };
    let topNeighbour = {
        i: root.i - 1,
        j: root.j
    };
    let bottomNeighbour = {
        i: root.i + 1,
        j: root.j
    };
    // check if left neighbour is the root itself, or valid grid of the array
    if (!IsIndexSame(root, leftNeighbour) && IsValidChildren(board, leftNeighbour)) {
        // console.log('valid child leftNeighbour')
        arr.push(leftNeighbour);
    }
    if (!IsIndexSame(root, rightNeighbour) && IsValidChildren(board, rightNeighbour)) {
        // console.log('valid child rightNeighbour')
        arr.push(rightNeighbour);
    }
    if (!IsIndexSame(root, topNeighbour) && IsValidChildren(board, topNeighbour)) {
        // console.log('valid child topNeighbour')
        arr.push(topNeighbour);
    }
    if (!IsIndexSame(root, bottomNeighbour) && IsValidChildren(board, bottomNeighbour)) {
        // console.log('valid child bottomNeighbour')
        arr.push(bottomNeighbour);
    }
    return arr;
}
function exist(board, word) {
    let wordQueue = word.split('');
    let root = FindIndex(board, wordQueue[0]);
    // first element is not found
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
