/**
 * 
 * How to remove duplicates from a sorted linked list?
 * 
 */

class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

function removeDuplicates(head) {
    if(!head) return head
    let current = head
    while(current != null && current.next != null){
        if(current.next.value === current.value){
            current.next = current.next.next
        }else{
            current = current.next
        }
    }
    return head
}



const head = new Node (2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(6)
head.next.next.next.next = new Node(8)
head.next.next.next.next.next = new Node(9)
// printLinkedlist(head)
console.log('The removed duplicate ===>',removeDuplicates(head))