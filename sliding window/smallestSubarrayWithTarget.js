/**

Given an array of positive numbers and a positive number ‘S’, 
find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
Return 0, if no such subarray exists.


Example 1:
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Example 2:
Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example 3:
Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

 */

function smallestSubArray (input, S) {
    let start = 0 
    let resultSum = 0 
    smallestLength = Infinity

    for(end = 0; end < input.length; end++){
        resultSum += input[end]

        while(resultSum >= S) {
            smallestLength = Math.min (smallestLength, end - start + 1)
            resultSum -= input[start]
            start += 1
        }
    }

    if(smallestLength === Infinity) {
        return 0
    }

    return smallestLength; 
}


let input = [2, 1, 5, 2, 3, 2], S=7 
let input1 = [2, 1, 5, 2, 8], S1=7 
let input2 = [3, 4, 1, 1, 6], S2=8 

console.log("The smallest subarray with given sum", smallestSubArray(input, S))
console.log("The smallest subarray with given sum", smallestSubArray(input1, S1))
console.log("The smallest subarray with given sum", smallestSubArray(input2, S2))







































// function smallestSubArray(inputArr, S){
//     var start = 0 
//     var smallestLength = Infinity
//     var sum = 0
                                                                                       
//     for(end = 0; end < inputArr.length; end++){
//         sum += inputArr[end]

//         while(sum >= S){
//             smallestLength = Math.min(smallestLength, end - start + 1)
//             sum -= inputArr[start]
//             start += 1
//         }
//     }

//         if(smallestLength === Infinity ){
//             return 0
//         }
        
//         return smallestLength
// }

// let input = [2, 1, 5, 2, 3, 2], S=7 
// let input1 = [2, 1, 5, 2, 8], S1=7 
// let input2 = [3, 4, 1, 1, 6], S2=8 

// console.log("The smallest subarray with given sum", smallestSubArray(input, S))
// console.log("The smallest subarray with given sum", smallestSubArray(input1, S1))
// console.log("The smallest subarray with given sum", smallestSubArray(input2, S2))