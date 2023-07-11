/**
 * 
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 * 

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.

 * 
 */

function tripletSumtoZero(arr) {
    arr.sort((a, b) => (a -b))
    let triplets = []

    for(let i = 0; i < arr.length; i++){
        if(i > 0 && arr[i] === arr[i+1]){
            continue
        }
        const target = -arr[i]
        searchPair(arr, target, i+1, triplets)
    }
    return triplets
}

function searchPair(arr, target, left, triplets){
    let right = arr.length - 1

    while(left < right){
        const sum = arr[left] + arr[right]

        if(sum === target){
            triplets.push([-target, arr[left], arr[right]])
            left += 1
            right -= 1

            while(left < right && arr[left] === arr[left + 1]){
                left += 1
            }
            while(left < right && arr[right] === arr[right + 1]){
                right -= 1
            }
        }else if(sum > target){
            right -= 1
        }else {
            left += 1
        }

    }
}

const input = [-3, 0, 1, 2, -1, 1, -2]
const input1 = [-5, 2, -1, -2, 3]

console.log(` triplets of unsorted array ${input} =====> ${tripletSumtoZero(input)}`)
console.log(` triplets of unsorted array ${input1} =====> ${tripletSumtoZero(input1)}`)