/***
 * 
 * How to check if a given linked list is a palindrome? (solution)
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}
// Extreme easy solution
function isPallindromeList(head){
    let string1 = string2 = ''
    let current = head
    while(current !== null){
        string1 = `${string1}${current.value}`
        string2 = `${current.value}${string2}`

        current = current.next
    }
    return string1 === string2
}

const head = new Node (1)
head.next = new Node(2)
head.next.next = new Node(2)
head.next.next.next = new Node(1)

console.log(isPallindromeList(head))