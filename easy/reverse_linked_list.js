// Reverse a singly linked list.

// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

class NodeList {
    constructor(val , next = null ){
        this.val = val 
        this.next = next 
    }
}

const make_linkedlist = array => {
    let current_node = new NodeList(array[0])
    let root = current_node
    for(let i = 1 ; i < array.length ; i ++){
        current_node.next = new NodeList(array[i])
        current_node = current_node.next
    }
    return root
}

var reverseList = function(head) {
    let prev = null 
    let curr = head 
    while(curr !==  null){
        let next = curr.next 
        curr.next = prev 
        prev = curr 
        curr = next 
    }
    return prev
}

console.log(reverseList(make_linkedlist([1,2,3,4,5])))