/* 

// Given a string, find the length of the longest substring which has no repeating characters.

Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".

*/


function noRepeatSubstr(input){
    let start = 0
    let maxLength = 0 
    let charMap = {}

    for(end = 0; end < input.length; end++){
        const rightChar = input[end]

        if(rightChar in charMap){
            start = Math.max(start, charMap[rightChar] + 1)
        }

        charMap[rightChar] = end
        maxLength = Math.max(maxLength, end - start +1)
    }
    return maxLength
}



























// function noRepeatSubstr(str){
//     let start = 0
//     let charMap = {}
//     let maxLength = 0
//     const inputArr = str.split('')
//     for(end = 0; end < inputArr.length; end++){
//         const rightChar = inputArr[end]
//         if(rightChar in charMap){
//             start = Math.max(start, charMap[rightChar] + 1)
//         }
//         charMap[rightChar] = end
//         maxLength = Math.max(maxLength, end - start + 1)
//     }
//     return maxLength 
// }



console.log(`Length of longest Substring: ${noRepeatSubstr('aabccbb')}`)
console.log(`Length of longest Substring: ${noRepeatSubstr('abbbb')}`)
console.log(`Length of longest Substring: ${noRepeatSubstr('abccde')}`)