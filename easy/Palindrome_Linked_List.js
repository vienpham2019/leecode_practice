// Given a singly linked list, determine if it is a palindrome.

// Example 1:
// Input: 1->2
// Output: false

// Example 2:
// Input: 1->2->2->1
// Output: true

class ListNode {
    constructor(val , next = null ){
        this.val = val 
        this.next = next 
    }
}

const create_linkedlist = array => {
    let root = new ListNode(array[0])
    let current_node = root 
    for(let i = 1 ; i < array.length ; i ++){
        current_node.next = new ListNode(array[i])
        current_node = current_node.next 
    }
    return root 
}

const reverse = node => {
    let prev = null 
    let curr = node 
    while(curr !== null){
        let next = curr.next 
        curr.next = prev 
        prev = curr 
        curr = next 
    }
    return prev
}

var isPalindrome = function(head) {
    let slow = head 
    let fast = head
    while (fast !== null && fast.next !== null){
        slow = slow.next 
        fast = fast.next.next 
    }

    fast = head 
    slow = reverse(slow)

    while(slow !== null){
        if(slow.val !== fast.val) return false 
        slow = slow.next 
        fast = fast.next 
    }

    return true 
}
console.log(isPalindrome(create_linkedlist([1,2,3,3,2,1])))