"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTwoNumber = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function ExtractToNumber(list) {
    let curr = list;
    let str = '';
    while (curr !== null) {
        str = str + curr.val.toString();
        curr = curr.next;
    }
    return parseInt(str);
}
function PushTail(list, num) {
    if ((list === null || list === void 0 ? void 0 : list.val) === -23) {
        list.val = num;
    }
    else {
        let curr = list;
        while ((curr === null || curr === void 0 ? void 0 : curr.next) !== null) {
            curr = curr.next;
        }
        curr.next = new ListNode(num, null);
    }
}
function PushListNode(num) {
    let stringVersion = num.toString();
    let listNode = new ListNode(-23, null);
    for (let i = 0; i < stringVersion.length; i++) {
        PushTail(listNode, parseInt(stringVersion.charAt(i)));
    }
    return listNode;
}
function addTwoNumbers(l1, l2) {
    let NumL1 = ExtractToNumber(l1);
    let NumL2 = ExtractToNumber(l2);
    let res = NumL1 + NumL2;
    return PushListNode(res);
}
;
function AddTwoNumber() {
    let l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
    let l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
    console.log(addTwoNumbers(l1, l2));
}
exports.AddTwoNumber = AddTwoNumber;
