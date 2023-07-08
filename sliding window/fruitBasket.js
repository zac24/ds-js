/**
 * Fruits into Baskets
 * 
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. 

The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, 

i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example 2:
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
 */

function fruitBasket(arr) {
    var start = 0 
    var charMap = {}
    var maxFruits = 0
    for(var end = 0; end < arr.length; end++){
        const rightChar = arr[end]
        if(charMap.hasOwnProperty(rightChar)){
            charMap[rightChar] += 1
        }
        charMap[rightChar] = 1
        console.log('charMap ===>', charMap)
        while(Object.keys(charMap).length > 2){
            const leftChar = arr[start]
            charMap[leftChar] -= 1
            if(charMap[leftChar] === 0){
                delete charMap[leftChar]
            }
            start += 1
        }

        maxFruits = Math.max(maxFruits, end - start + 1)
    }
    return maxFruits
}


let input = ['A', 'B', 'C', 'A', 'C']
let input1 = ['A', 'B', 'C', 'B', 'B', 'C']

console.log("max fruits in a basket", fruitBasket(input))
console.log("max fruits in a basket", fruitBasket(input1))