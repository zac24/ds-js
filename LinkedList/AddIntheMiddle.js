/**
 * 
 * How to add an element in the middle of the linked list?
 * 
 */


class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}



function addIntheMiddle(head, element){
    let slow = head 
    let fast = head
    
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }

    let temp = slow.next
    slow.next = element
    element.next = temp

    return head
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)

const element = new Node(6)

console.log('The new LinkedList:', addElementInMiddleOfList(head, element))