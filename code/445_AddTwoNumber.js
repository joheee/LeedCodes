"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTwoNumber = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function ExtractToString(list) {
    let curr = list;
    let str = '';
    while (curr !== null) {
        str = str + curr.val.toString();
        curr = curr.next;
    }
    return str;
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
function PushListNode(str) {
    let stringVersion = str;
    let listNode = new ListNode(-23, null);
    for (let i = 0; i < stringVersion.length; i++) {
        PushTail(listNode, parseInt(stringVersion.charAt(i)));
    }
    return listNode;
}
function AlignLength(strL1, strL2) {
}
function addTwoNumbers(l1, l2) {
    let strL1 = ExtractToString(l1);
    let strL2 = ExtractToString(l2);
    AlignLength(strL1, strL2);
    console.log(strL1);
    console.log(strL2);
    return PushListNode(strL2);
}
;
function AddTwoNumber() {
    let l1 = new ListNode(2, new ListNode(4, null));
    let l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
    console.log(addTwoNumbers(l1, l2));
}
exports.AddTwoNumber = AddTwoNumber;
