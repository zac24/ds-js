/**
 * 
 * How do you sort a linked list.
 * 
 */


class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function sortLinkedlist(head){
    if(head === null) return null

    let current = head
    let arr = []

    while(current != null){
        arr.push(current.value)
        current = current.next
    }

    arr.sort((a,b) => a-b)

    let n = new Node(arr[0])
    head = n
    let temp = head

    for(let i = 1; i < arr.length; i++){
        let n1 = new Node(arr[i])
        temp.next = n1
        temp = temp.next
    }
    return head
}

const head = new Node (1)
head.next = new Node(12)
head.next.next = new Node(3)
head.next.next.next = new Node(10)
head.next.next.next.next = new Node(9)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log("Sort Linkedlist ================>", sortLinkedlist(head))


