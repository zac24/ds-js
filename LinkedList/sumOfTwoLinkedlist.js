/**
 * 
 * How do you find the sum of two linked lists using Stack?
 * 
 */

// Works only in case of same size of LinkedLit

class Node {
    constructor (value, next = null){
        this.value = value 
        this.next = next
    }
}

function sumOfTwoLinkedlist(firstHead, secondHead){
    let firstStack = []
    let secondStack = []
    
    let result = []
    let carry = 0

    while(firstHead !== null){
        const val = firstHead.value
        firstStack.push(val)
        firstHead = firstHead.next
    }

    while(secondHead !== null){
        const val = secondHead.value
        secondStack.push(val) 
        secondHead = secondHead.next
    }

    let maxLengthOfStack = firstStack.length > secondStack.length ? firstStack.length : secondStack.length

    while(maxLengthOfStack > 0){
        let digit = 0
        const firstVal = firstStack.pop()
        const secondVal = secondStack.pop()
        let sum = firstVal + secondVal + carry
        
        if(sum >= 10) {
            digit = sum % 10
            carry = Math.floor(sum / 10)
        }
        result.push(digit)
        maxLengthOfStack -= 1
    }
    if(carry > 0){[
        result.push(carry)
    ]}

    console.log(`result ===>`, result)

    return false

}

let firstList = new Node(1)
firstList.next = new Node(2)
firstList.next.next = new Node(3)

console.log('firstList ==>', firstList)

let secondList = new Node(8)
secondList.next = new Node(9)
secondList.next.next = new Node(9)
secondList.next.next.next = new Node(7)

console.log('secondList ==>', secondList)

sumOfTwoLinkedlist(firstList, secondList)