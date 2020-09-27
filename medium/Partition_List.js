// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:
// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

class ListNode {
    constructor(val , next = null){
        this.val = val 
        this.next = next 
    }
}

const create_linkedlist = nums => {
    let head = new ListNode(nums[0])
    let curr = head 

    for(let i = 1; i < nums.length ; i ++){
        curr.next = new ListNode(nums[i])
        curr = curr.next 
    }
    return head 
}

const read_likedlist = head => {
    let result = []
    while(head !== null){
        result.push(head.val)
        head = head.next 
    }
    return result 
}

let nums = [1,4,3,2,5,2]

let head = create_linkedlist(nums)

const partition = (head , x) => {
    let less_head = new ListNode(0)
    let less = less_head 
    let greater_head = new ListNode(0)
    let greater = greater_head 

    while(head !== null){
        if(head.val < x){
            less.next = head 
            less = less.next 
        }else{
            greater.next = head 
            greater = greater.next
        }
        head = head.next 
    }
    greater.next = null 
    less.next = greater_head.next 
    return less_head.next 
}

console.log(read_likedlist(partition(head , 3)))

