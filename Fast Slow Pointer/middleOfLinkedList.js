/**
 * 
 * Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
 * If the total number of nodes in the LinkedList is even, return the second middle node.
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}


function findMiddleOfLinkedlist(head){
    let current = head
    let linkedListLength = 0

    while(current !== null && current.next !== null){
        current = current.next
        linkedListLength += 1
    }
    let mid = linkedListLength % 2 === 0 ? linkedListLength /2 : (linkedListLength/2)+1

    while(Math.floor(mid) > 0){
        head = head.next
        mid = mid - 1 
    }

    return head.value

}


const head = new Node (1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)

console.log(`the middle of Linkedlist ===> ${findMiddleOfLinkedlist(head)}`)