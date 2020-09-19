/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 == null){return l2};
    if(l2 == null){return l1};
    let list1 = l1;
    let list2 = l2;
    let count = 0;
    let newList = new ListNode();
    let head = newList
    while(list1 || list2){
        let val1 = list1?list1.val:0;
        let val2 = list2?list2.val:0;
        let sum = val1+val2+count;
        count = sum>=10?1:0
        newList.next = new ListNode(sum%10);
        if(list1 !== null){
            list1 = list1.next;
        }
        if(list2 !== null){   //注意判断条件是list2 !== null 允许list2=null但不允许list2=null的情况下还执行list2=list.next
            list2 = list2.next;
        }
        newList = newList.next;
    }
    if(count){
        let newNode = new ListNode(count);
        newList.next = newNode;
    }
    return head.next
};