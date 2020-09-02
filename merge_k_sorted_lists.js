// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

var mergeKLists = function(lists) {
    let heap = []
    let root = new ListNode()
    let current_node = root
    for(let i = 0; i < lists.length ; i ++){
        heap = addToHeap(lists[i] , heap , (a,b) => a.data < b.data)
    }

    while(heap.length !== 0) {
        let min_lists = removeFromHeap(heap, (a,b) => a.data < b.data)
        current_node = current_node.next = min_lists.min 
        console.log(min_lists.min.data , min_lists.min.next)
        heap = min_lists.array
        if(min_lists.min.next){
            heap = addToHeap(min_lists.min.next, heap , (a,b) => a.data < b.data)
        }
    }

    let c = root.next 
    while (c) {
        console.log(c.data)
        c = c.next
    }

    return root.next
}

const addToHeap = (node , array , method) => {
    array.push(node)
    let i = array.length 
    while(array[Math.floor(i / 2) - 1] && method(array[i - 1] , array[Math.floor(i / 2) - 1])){
        let current_node = array[i - 1]
        array[i - 1] = array[Math.floor(i / 2) - 1]
        array[Math.floor(i / 2) - 1] = current_node
        i = Math.floor(i / 2)
    }
    return array 
}

const removeFromHeap = (array , method) => { 
    let min = array[0]
    array[0] = array[array.length - 1]
    let current_node = array[0]
    array.pop()
    let i = 1
    let stop = false
    while(!stop) {
        let left_child = array[(2 * i) - 1]
        let right_child = array[(2 * i)]
        let max_child_index 
        if(left_child && right_child){
            max_child_index = method(left_child,right_child) ? 2 * i : 2 * i + 1
        }else if(left_child || right_child){
            max_child_index = left_child ? 2 * i : 2 * i + 1
        }

        if(max_child_index && method(array[max_child_index - 1] ,current_node)){
            array[i - 1] = array[max_child_index - 1]
            array[max_child_index - 1] = current_node 
            current_node = array[max_child_index - 1]
            i = max_child_index
        }else{
            stop = true
        }
    }
    return {array, min} 
} 

class ListNode {
    constructor(data = 0, next = null){
        this.data = data 
        this.next = next 
    }
}

const create_linked_lists = (array) => {
    let root = new ListNode()
    let current = root
    for(let i = 0; i < array.length ; i ++ ){
        current = current.next = new ListNode(array[i])
    }
    return root.next 
}

console.log(mergeKLists(
    [create_linked_lists([-4]),
    create_linked_lists([-10, -6, -6]),
    create_linked_lists([0,3]),
    create_linked_lists([2]),
    create_linked_lists([-10,-9,-8,3,4,4]),
    create_linked_lists([-10,-10,-8,-6,-4,-3,1]),
    create_linked_lists([2]),
    create_linked_lists([-9,-4,-2,4,4]),
    create_linked_lists([-4,0])]
    )
)