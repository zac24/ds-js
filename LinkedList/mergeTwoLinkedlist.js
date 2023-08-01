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

    let firstListLength = findLength(first)
    let secondListLength = findLength(second)

    let length = firstListLength >= secondListLength ? firstListLength : secondListLength

    while(length > 0){
        if(first.value < second.value){
            resultList.next = first
            first = first.next
        }else {
            resultList.next = second
            second = second.next
        }
        resultList = resultList.next
        length -= 1
    }

    if(first == null){
        resultList.next = second
    }

    if(second == null){
        resultList.next = first
    }

    // console.log(headOfResultList.next)
    printLinkedlist(headOfResultList.next)
    return headOfResultList.next


}

function findLength(head){
    let temp = head
    let count = 1
    while(temp.next !== null){
        count += 1
        temp = temp.next
    }

    return count
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

const secondHead  = new Node(5)
secondHead.next = new Node(6)
secondHead.next.next = new Node(7)
secondHead.next.next.next = new Node(8)

mergeTwoLinkedlist(head, secondHead)
