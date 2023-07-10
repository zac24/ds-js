/**
 * Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order
 * 

Example 1:
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

Example 2:
Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]

 */

function squareRootSortedArray(inputArr) {
    let left = 0 
    const n = inputArr.length
    let highestIndex = n - 1
    let right = n -1
    let result = Array(n).fill(0)
    while(right >= left){
        let leftSquare = inputArr[left]*inputArr[left]
        let rightSquare = inputArr[right]*inputArr[right]

        if(rightSquare > leftSquare){
            result[highestIndex] = rightSquare
            right -= 1
        }else{
            result[highestIndex] = leftSquare
            left += 1
        }
        highestIndex -= 1
    }
    return result
}

const input1 = [-2, -1, 0, 2, 3]
const input2 = [-3, -1, 0, 1, 2]

console.log(`Square root of sorted array ${input1} is ${squareRootSortedArray(input1)}`)
console.log(`Square root of sorted array ${input2} is ${squareRootSortedArray(input2)}`)