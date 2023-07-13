/**
 * 
 * Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
 * 
 */


class Node {
    constructor(value, next = null){
        this.value = value 
        this.next = next 
    }
}


function findCycleStart(head){
    let slow = head, 
    fast = head 
    let cycleLength = 0
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next 

        if(slow === fast){
            cycleLength = calculateCycleLength(slow)
            break;
        }
    }

    return findStart(head, cycleLength)

}

function calculateCycleLength(slow){
    let current = slow
    let cycleLength = 0
    while(true){
        current = current.next 
        cycleLength += 1

        if(current === slow){
            break;
         }
    }
    return cycleLength
}

function findStart(head, cycleLength){
    let first = head 
    let second = head 

    while(cycleLength > 0){
        second = second.next
        cycleLength -= 1
    }

    while(second !== first){
        first = first.next
        second = second.next
    }

    return first 

}

const head = new Node (1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has Cycle ====> ${findCycleStart(head).value}`)

// head.next.next.next.next.next.next.next = head.next.next.next
// console.log(`LinkedList has Cycle ====> ${findCycleStart(head).value}`)

// head.next.next.next.next.next.next.next.next = head.next.next.next.next
// console.log(`LinkedList has Cycle ====> ${findCycleStart(head).value}`)

head.next.next.next.next.next.next.next.next = head
console.log(`LinkedList has Cycle ====> ${findCycleStart(head).value}`)
