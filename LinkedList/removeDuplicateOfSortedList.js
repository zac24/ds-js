/**
 * 
 * How to remove duplicates from a sorted linked list?
 * 
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function removeDuplicates(head){
    if(!head) return head
    let current = head
    while(current != null && current.next != null){
        if(current.next.val === current.val){
            current.next = current.next.next
        }else{
            current = current.next
        }
    }
    printLinkedlist(head)
    return head
}

function printLinkedlist(head){
    let current = head
    while(current !== null){
        console.log(`${current.value}`)
        current = current.next
    }
}


const head = new Node (2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(6)
head.next.next.next.next = new Node(8)
head.next.next.next.next.next = new Node(9)
printLinkedlist(head)
removeDuplicates(head)