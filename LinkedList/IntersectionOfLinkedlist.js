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

function inetrsection (headA, headB) {
    let listA = headA
    let listB = headB

    while(listA !== listB){
        listA = listA.next
        listB = listB.next

        if(listA === listB){
            return listA
        }

        if(listA === null){
            listA = headB
        }
        if(listB === null){
            listB = headA
        }
    }

    return listA

}

// let intersection = function findIntersection(headA, headB){
//     let a = headA
//     let b = headB

//     while(a !== b){
//         a = !a ? headB : a.next
//         b = !b ? headA : b.next
//     }
//     console.log()
//     return a
// }

let list1 = new Node(4)
list1.next = new Node(1)
list1.next.next = new Node(8)
list1.next.next.next = new Node(4)
list1.next.next.next.next = new Node(5)

let list2 = new Node(5)
list2.next = new Node(6)
list2.next.next = list1.next
list2.next.next.next = list1.next.next
list2.next.next.next.next = list1.next.next.next
list2.next.next.next.next.next = list1.next.next.next.next

console.log('Intersection of LinkedList =====>', intersection(list1, list2))



