/*

Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].


Example 2:
Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

*/ 

function maxSumSubarrayOfK(input, k){
   
    let start = 0
    let windowSum = 0 
    let resultSum = 0 
    for(end = 0; end < input.length - 1; end++){
        windowSum += input[end]
        if(end - start +1 >= k) {
            resultSum = Math.max(resultSum, windowSum)
            windowSum -= input[start]
            start += 1
        }
    }
    return resultSum

}

const input = [2, 1, 5, 1, 3, 2], k=3 

console.log('the Subarray with maximum sum is', maxSumSubarrayOfK(input, k))