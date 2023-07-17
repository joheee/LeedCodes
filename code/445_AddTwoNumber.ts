class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function ExtractToNumber(list:ListNode | null) : number {
    let curr = list
    let str = ''
    while(curr !== null) {
        str = str + curr.val.toString()
        curr = curr.next
    }
    return parseInt(str)
}

function PushTail(list:ListNode | null, num: number) : void {
    if(list?.val === -23) {
        list.val = num
    } else {
        let curr = list
        while(curr?.next !== null) {
            curr = curr!.next
        }
        curr.next = new ListNode(num, null)
    }
}

function PushListNode(num: number) : ListNode {
    let stringVersion = num.toString()
    let listNode = new ListNode(-23,null)
    for(let i=0;i<stringVersion.length; i++){
        PushTail(listNode,parseInt(stringVersion.charAt(i)))
    }
    return listNode
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let NumL1 = ExtractToNumber(l1)
    let NumL2 = ExtractToNumber(l2)
    let res = NumL1 + NumL2
    return PushListNode(res)
};

export function AddTwoNumber(){
    let l1 = new ListNode(2,new ListNode(4, new ListNode(3, null)))
    let l2 = new ListNode(5,new ListNode(6, new ListNode(4, null)))

    console.log(addTwoNumbers(l1,l2))
}