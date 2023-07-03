/**
 * 
 * Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.
 * The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.
 * 

Example 1:
Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]

Example 2:
Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]

 */


function dutchNationalFlag(arr){
    let low = 0,
    high = arr.length - 1
    i = 0 

    while(i <= high){
        if(arr[i] === 0){
            [arr[i], arr[low]] = [arr[low], arr[i]]

            i += 1
            low += 1
        }else if(arr[i] === 1){
            i += 1
        }else {
            [arr[i], arr[high]] = [arr[high], arr[i]]
            high -= 1
        }
    }
}

let arr = [2, 2, 0, 1, 2, 0]
let arr1 = [1, 0, 2, 1, 0]
dutchNationalFlag(arr)
dutchNationalFlag(arr1)
console.log(`the dutch flag sort ====> ${arr}`)
console.log(`the dutch flag sort ====> ${arr1}`)