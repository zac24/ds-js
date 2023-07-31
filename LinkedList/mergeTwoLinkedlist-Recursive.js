class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function mergeTwoLinkedlist(firstList, secondList){

    let first = firstList
    let second = secondList

    if(first == null)  return second;
    if(second == null) return first;
    
   if(first.value < second.value){
    first.next = mergeTwoLinkedlist(first.next, second)
    return first;
   }else{
    second.next = mergeTwoLinkedlist(first, second.next)
    return second;
   }

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

let result = mergeTwoLinkedlist(head, secondHead)
printLinkedlist(result)