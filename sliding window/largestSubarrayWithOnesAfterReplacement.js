/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
 * 
 *

Example 1:
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Example 2:
Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

 */

function longestSubarrayWithOnesAfterReplacement(inputArr, k){
    var start = 0 
    var maxLength = 0 
    let maxRepeatCount = 0 
    let charMap = {}
    for(end = 0; end < inputArr.length; end++){
        const rightChar = inputArr[end]

        if(!charMap.hasOwnProperty(rightChar)){
            charMap[rightChar] = 0
        }
        charMap[rightChar] += 1
        maxRepeatCount = Math.max(maxRepeatCount, charMap[rightChar])

        if((end - start + 1) - maxRepeatCount > k){
            const leftChar = charMap[start]
            charMap[start] -= 1
            start += 1
        }
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength
}

const input1 = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]
const input2 = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1]

console.log(`Longest Subarray with ones after replacement ${longestSubarrayWithOnesAfterReplacement(input1, 2)}`)
console.log(`Longest Subarray with ones after replacement ${longestSubarrayWithOnesAfterReplacement(input2, 3)}`)