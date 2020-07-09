// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.

class ListNode {
    constructor(data = 0, next = null ){
        this.data = data
        this.next = next 
    }
}

// var removeNthFromEnd = function(head, n) {
    
// };

let lists = new ListNode(1)
lists.next = new ListNode(2)
lists.next.next = new ListNode(3)
lists.next.next.next = new ListNode(4)
lists.next.next.next.next = new ListNode(5)

console.log(lists)