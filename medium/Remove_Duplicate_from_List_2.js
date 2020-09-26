// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// Return the linked list sorted as well.

// Example 1:
// Input: 1->2->3->3->4->4->5
// Output: 1->2->5

// Example 2:
// Input: 1->1->1->2->3
// Output: 2->3

class ListNode {
    constructor(val , next = null){
        this.val = val 
        this.next = next 
    }
}

const create_list = array => {
    let head = new ListNode(array[0])
    let curr = head 
    for(let i = 1 ; i < array.length ; i ++){
        curr.next = new ListNode(array[i])
        curr = curr.next 
    }
    return head 
}

const deleteDuplicates = head => {
    let root = new ListNode(0)
    root.next = head 
    let curr = root 
    while(curr.next !== null && curr.next.next !== null){
        if(curr.next.val === curr.next.next.val){
            let duplicate = curr.next.val 
            while(curr.next !== null && curr.next.val === duplicate) curr.next = curr.next.next 
        }else{
            curr = curr.next 
        }
    }
    return root.next 
}

let head = create_list([1,2,3,3,4,4,5])
console.log(deleteDuplicates(head))