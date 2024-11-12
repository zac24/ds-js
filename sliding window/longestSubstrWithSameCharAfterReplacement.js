/* 

Longest Substring with Same Letters after Replacement


Example 1:
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

Example 2:
Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

Example 3:
Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

*/ 

function longestSubstrWithSameCharAfterReplacement (input, K) {
    const start = 0 
    let maxLength = 0 
    let 
}































function longestSubstrWithSameCharAfterReplacement(str, k){
    let start = 0 
    let maxLength = 0 
    let charMap = {}
    let maxRepeatCount = 0
    for(end = 0; end < str.length; end++){
        const rightChar = str[end]
        if(!charMap.hasOwnProperty(rightChar)){
            charMap[rightChar] = 0 
        }

        charMap[rightChar] += 1
        maxRepeatCount = Math.max(maxRepeatCount, charMap[rightChar])
        if((end-start + 1) - maxRepeatCount > k){
            const leftChar = str[start]
            charMap[leftChar] -= 1
            start += 1
        }
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength
}

console.log(`Longest Substring with Same character after replacement ${longestSubstrWithSameCharAfterReplacement('aabccbb', 2)}`)
console.log(`Longest Substring with Same character after replacement ${longestSubstrWithSameCharAfterReplacement('abbcb', 1)}`)
console.log(`Longest Substring with Same character after replacement ${longestSubstrWithSameCharAfterReplacement('abccde', 1)}`)
