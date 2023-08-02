/**
 * 
 * How to merge two sorted linked lists?
 * 
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function mergeTwoLinkedlist(firstListHead, secondListHead){
    let first = firstListHead
    let second = secondListHead
    let resultList = new Node(0)
    let headOfResultList = resultList

    while(first !== null && second !== null){
        if(first.value < second.value){
            resultList.next = first
            first = first.next
        }else {
            resultList.next = second
            second = second.next
        }
        resultList = resultList.next
    }

    if(first == null){
        resultList.next = second
    }

    if(second == null){
        resultList.next = first
    }

    printLinkedlist(headOfResultList.next)
    return headOfResultList.next

}

function printLinkedlist(head){
    let current = head
    while(current != null){
        console.log(`${current.value}`)
        current = current.next
    }
}


const head = new Node (2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)

const secondHead  = new Node(1)
secondHead.next = new Node(3)
secondHead.next.next = new Node(5)
secondHead.next.next.next = new Node(7)

mergeTwoLinkedlist(head, secondHead)
