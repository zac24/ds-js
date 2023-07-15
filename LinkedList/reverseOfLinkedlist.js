/**
 * 
 * How do you reverse a linked list in place
 * 
 */


class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function reverseOfLinkedlist(head) {
    let prev = null
    let current = head
    let next = null 

    while(current !== null){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    printLinkedlist(prev)
    return prev
}

function printLinkedlist(head){
    let current = head
    while(current != null){
        console.log(`${current.value}`)
        current = current.next
    }
}

const head = new Node (1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

reverseOfLinkedlist(head)

