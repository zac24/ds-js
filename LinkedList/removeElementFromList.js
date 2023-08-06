/**
 * 
 * How to remove all elements from a linked list of integers which match with given value?
 * 
 */

function Node(value, next) {
         this.value = (value===undefined ? 0 : value)
         this.next = (next===undefined ? null : next)
}


function removeElementsMatchesWithGivenInput(head, element){
    if(!head) return null
    if(head.next === null && head.value === element) return null


    let current = head

    while(head.next != null){
        if(current && current.value === element){
            current = current.next
        }else if(head.next.value === element){
            head.next = head.next.next
        }else {
            head = head.next
        }
    }
    return current
}

const head = new Node (1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(3)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(3)
head.next.next.next.next.next.next.next = new Node(8)

console.log("=============>", removeElementsMatchesWithGivenInput(head, 3))

