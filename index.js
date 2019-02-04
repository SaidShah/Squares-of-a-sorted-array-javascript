// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1
//
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

function sortedSquares(A) {
    for(let i= 0;i<A.length;i++){
        A[i] = A[i]*A[i]
    }
    return A.sort((a,b)=>{return a>b})
};


let arr = [-4,-1,0,3,10]
let otherArr = [-7,-3,2,3,11]
console.log(sortedSquares(arr))
console.log(sortedSquares(otherArr))
