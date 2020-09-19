// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:
// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL

// Example 2:
// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL

class ListNode {
    constructor (val , next = null){
        this.val = val 
        this.next = next 
    }
}

const create_linkedlist = array => {
    let root = new ListNode(array[0])
    let curr = root 
    for(let i = 1 ; i < array.length ; i ++){
        curr.next = new ListNode(array[i])
        curr = curr.next 
    }
    return root 
}

const rotateRight = (head , k) => {
    if(head === null) return null 
    let curr = head 
    let n = 1 
    while(curr.next){
        n ++
        curr = curr.next 
    }
    k %= n 
    if(k === 0) return head 
    let step = n - k 
    curr.next = head 
    let tail = curr 
    while(step-- > 0){
        tail = tail.next
    }
    let newHead = tail.next
    tail.next = null 
    return newHead 
}

let my_list = [1,2,3,4,5]

console.log(rotateRight(create_linkedlist(my_list) , 2))