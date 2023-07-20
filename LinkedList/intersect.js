
class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function instersection(headA, headB){

    let l1 = headA
    let l2 = headB

    while(l1 != l2){
        l1 = !l1 ? headB : l1.next
        l2 = !l2 ? headA : l2.next
    }

    return l1
}

let list1 = new Node(1)
list1.next = new Node(2)
list1.next.next = new Node(3)
list1.next.next.next = new Node(4)
list1.next.next.next.next = new Node(5)
list1.next.next.next.next.next = new Node(6)
list1.next.next.next.next.next.next = new Node(7)

let list2 = new Node(11)
list2.next = new Node(12)
list2.next.next = new Node(13)
list2.next.next = list1.next.next.next.next
list2.next.next.next = list1.next.next.next.next.next
list2.next.next.next.next = list1.next.next.next.next.next.next


console.log('Intersection of LinkedList =====>', instersection(list1, list2))
