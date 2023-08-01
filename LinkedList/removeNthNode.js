/**
 * 
 * How to remove Nth Node from the end of a linked list?
 * 
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function removeNthNodefromEndOfLinkedlist(head, n){
    let slow = head
    let fast = head 

    let start = 1

    while(fast.next !== null){
        fast = fast.next
        start += 1
        if(start > n){
            slow = slow.next
        }
    }

    slow = slow.next.next

    printLinkedlist(head)
    return head
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


console.log(`remove nth node from end of LinkedList ===> ${removeNthNodefromEndOfLinkedlist(head, 3).value}`)
