class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function ExtractToString(list:ListNode | null) : string {
    let curr = list
    let str = ''
    while(curr !== null) {
        str = str + curr.val.toString()
        curr = curr.next
    }
    return str
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

function PushListNode(str:string) : ListNode {
    let stringVersion = str
    let listNode = new ListNode(-23,null)
    for(let i=0;i<stringVersion.length; i++){
        PushTail(listNode,parseInt(stringVersion.charAt(i)))
    }
    return listNode
}

function AlignLength(strL1:string,strL2:string) : void {

}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let strL1 = ExtractToString(l1)
    let strL2 = ExtractToString(l2)
    AlignLength(strL1,strL2)
    console.log(strL1)
    console.log(strL2)
    return PushListNode(strL2)
};

export function AddTwoNumber(){
    let l1 = new ListNode(2,new ListNode(4, null))
    let l2 = new ListNode(5,new ListNode(6, new ListNode(4, null)))

    console.log(addTwoNumbers(l1,l2))
}
