/**
 * 
 * How do you find the third node from the end in a singly linked list? 
 * 
 */


class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function thirdNodeFromEndInLinkedList(head){
    let slow = head
    let fast = head 

    let start = 1

    while(fast.next !== null){
        fast = fast.next
        start += 1

        if(start > 3){
            slow = slow.next
        }
    }
    return slow
}

const head = new Node (1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)


console.log(`third node from end of LinkedList ===> ${thirdNodeFromEndInLinkedList(head).value}`)
