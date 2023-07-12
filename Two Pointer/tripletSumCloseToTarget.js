/**
 * 
 * Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. 
 * If there are more than one such triplet, return the sum of the triplet with the smallest sum.
 * 

Example 1:
Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

Example 2:
Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

Example 3:
Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.


 * 
 */

function tripletWithTargetSumCloseToTarget(arr, target){
    arr.sort((a, b) => (a - b))
    var smallestDifference = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < arr.length - 2; i++){
        var left = i + 1 
        var right = arr.length - 1
        while(left < right){
            const targetDifference = target - (arr[i] + arr[left] + arr[right])

            if(targetDifference === 0){
                return target - targetDifference
            }

            if(Math.abs(targetDifference) < Math.abs(smallestDifference)){
                smallestDifference = targetDifference
            }

            if(targetDifference > 0){
                left += 1
            }else {
                right -= 1
            }
        }
    }   
    return target - smallestDifference
}

const input = [-2, 0, 1, 2], target = 2
const input1 = [-3, -1, 1, 2], target1= 1
const input2 = [1, 0, 1, 1], target2=100

console.log(`triplet sum close to target for ${input} with target ${target} is ======> ${tripletWithTargetSumCloseToTarget(input, target)}`)
console.log(`triplet sum close to target for ${input1} with target ${target1} is ======> ${tripletWithTargetSumCloseToTarget(input1, target1)}`)
console.log(`triplet sum close to target for ${input2} with target ${target2} is ======> ${tripletWithTargetSumCloseToTarget(input2, target2)}`)