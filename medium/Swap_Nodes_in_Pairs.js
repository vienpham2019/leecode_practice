// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

 

// Example:
// Given 1->2->3->4, you should return the list as 2->1->4->3.

const swap_pairs = head => {
    let root = new ListNode(0)
    root.next = head 
    let curr_node = root 
    while(curr_node.next && curr_node.next.next){
        let first = curr_node.next 
        let second = curr_node.next.next 
        first.next = second.next 
        second.next = first
        curr_node.next = second 
        curr_node = curr_node.next.next
    }
    return root.next 
}

class ListNode {
    constructor(val , next = null){
        this.val = val 
        this.next = next 
    }
}

const create_linked_list = array => {
    let root = new ListNode(array[0])
    let curr_node = root
    for(let i = 1 ; i < array.length ; i++){
        curr_node.next = new ListNode(array[i])
        curr_node = curr_node.next 
    }

    return root
}

console.log(swap_pairs(create_linked_list([1,2,3,4])))