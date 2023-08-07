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
// function isPallindromeList(head){
//     let string1 = string2 = ''
//     let current = head
//     while(current !== null){
//         string1 = `${string1}${current.value}`
//         string2 = `${current.value}${string2}`

//         current = current.next
//     }
//     return string1 === string2
// }



// ========== Using Stack ==========

function isPalindromeusingStack(head){
    let stack = []
    let current = head

    while(current != null){
        stack.push(current.value)
        current = current.next
    }

    while(head !== null){
        let element = stack.pop()
        if(element !== head.value){
            return false
        } else{
            head = head.next
        }
    }
    return true
}

const head = new Node('1')
head.next = new Node('2')
head.next.next = new Node('3')
head.next.next.next = new Node('4')
head.next.next.next.next = new Node('1')

console.log(isPalindromeusingStack(head))