/**
 * Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. 
 * All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
 * 
 */


function findHappyNumber(number){
    
    let slow = number
    let fast = number

    while(true){
        slow = findSquare(slow)
        fast = findSquare(findSquare(fast))
        if(slow === fast){
            break;
        }
    }
    return slow === 1
}

function findSquare(number){
    let sum = 0 

    while(number > 0){
        let digit = number % 10
        sum += digit * digit
        number = Math.floor(number/10)
    }

    return sum
}


console.log(findHappyNumber(12))
console.log(findHappyNumber(23))