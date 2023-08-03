/**
 * 
 * Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * 
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}


function partitionLinkedlist(head, x){
    const lessList = new Node()
    const moreList = new Node()

    let current = head
    let less = lessList
    let more = moreList

    while(current != null){
        if(current.value <= x){
            less = less.next = current
        }else {
            more = more.next = current
        }
        current = current.next
    }
    less.next = moreList.next
    more.next = null

    printLinkedlist(lessList.next)
    return lessList.next
}

function printLinkedlist(head){
    let current = head
    while(current != null){
        console.log(`${current.value}`)
        current = current.next
    }
}

const head = new Node (22)
head.next = new Node(24)
head.next.next = new Node(26)
head.next.next.next = new Node(28)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
head.next.next.next.next.next.next = new Node(14)
head.next.next.next.next.next.next.next = new Node(16)

partitionLinkedlist(head, 16)