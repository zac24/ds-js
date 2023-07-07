/**
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:
Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:
Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

 */


function longestSubstringWithKDistinct(str, k){
    var start = 0 
    var longestSubstr = 0
    let charMap = {}
    var inputArr = str.split('')

    for(end = 0; end < inputArr.length; end++){
        const rightChar = inputArr[end] 

        if(charMap.hasOwnProperty(rightChar)){
            charMap[rightChar] += 1
        }
        charMap[rightChar] = 1

        while(Object.keys(charMap).length > k){
            const leftChar = inputArr[start]
            charMap[leftChar] -= 1

            if(charMap[leftChar] === 0){
                delete charMap[leftChar]
            }
            start += 1
        }
        longestSubstr = Math.max(longestSubstr, end - start + 1)
    }
    return longestSubstr
}

let input = "araaciccciii", K = 2
let input1 = "araaci", K1 = 1
let input2 = "cbcceeeebebi", K2 = 3

console.log("The longest subarray with K unique", longestSubstringWithKDistinct(input, K))
console.log("The longest subarray with K unique", longestSubstringWithKDistinct(input1, K1))
console.log("The longest subarray with K unique", longestSubstringWithKDistinct(input2, K2))