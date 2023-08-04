/***
 * 
 * How to find the node at which the intersection of two singly linked lists begins.
 * 
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

let intersection = function findIntersection(headA, headB){
    let a = headA
    let b = headB

    while(a !== b){
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
}

const head = new Node (2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(9)
head.next.next.next.next.next = new Node(10)


const secondHead  = new Node(1)
secondHead.next = new Node(3)
secondHead.next.next = new Node(5)
secondHead.next.next.next = new Node(8)
secondHead.next.next.next.next = new Node(9)
secondHead.next.next.next.next.next= new Node(10)

mergeTwoLinkedlist(head, secondHead)




