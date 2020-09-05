// Remove all elements from a linked list of integers that have value val.

// Example:
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

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

var removeElements = function(head, val) {
    let current_node = new NodeList(-1)
    current_node.next = head 
    head = current_node

    while (current_node.next){
        if(current_node.next.val === val){
            current_node.next = current_node.next.next
        }else{
            current_node = current_node.next 
        }
    }
    return head.next
}

console.log(removeElements(make_linkedlist([1,2,6,3,4,5,6]) , 1))