// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// Example:
// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

class ListNode {
    constructor(val , next = null){
        this.val = val 
        this.next = next 
    }
}

const create_likedlist = nums => {
    let head = new ListNode(nums[0])
    let curr = head 
    for(let i = 1 ; i < nums.length ; i ++){
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

let nums = [1,2,3,4,5,6,7]

let head = create_likedlist(nums)

const reverseBetween = (head , m , n) => {
    let root = new ListNode(0)
    root.next = head 
    let pre = root 
    for(let i = 1 ; i < m ; i ++){
        pre = pre.next 
    }

    let curr = pre.next 
    for(let i = m ; i < n ; i ++){
        let next = curr.next 
        curr.next = next.next 
        next.next = pre.next 
        pre.next = next 
    }

    return root.next 
}

console.log(read_likedlist(reverseBetween(head , 3 , 6)))
