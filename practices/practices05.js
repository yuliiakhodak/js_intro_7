/*
Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
Examples:
firstPos([0, 3, -9,  5, 8])         -> 3
firstPos([-2, 0, -7, 10, -5])       -> 10
firstPos([1, 2, 3, -2])             -> 1
*/

function firstPos(arr){
    for (const x of arr){
        if (x > 0) return x
    }
}
console.log(firstPos([1, 2, 3, -2]))
/*
Requirement:
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
Examples:
firstNeg([0, 3, -9,  5, 8])         -> -9
firstNeg([-2, 0, -7, 10, -5])       -> -5
firstNeg([1, 2, 3, -2])             -> -2
*/
function lastNeg(arr){
    let newN = null;
    for (const x of arr){
        if (x < 0 ) newN = x
    } 
    return newN 
} 
console.log(lastNeg([-2, 0, -7, 10, -5]))
/*
Requirement:
Write a function named as firstLongest() which takes an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 or more element having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])    -> "yellow"
firstLongest(["Apple", "Banana", "Orange"])         -> "Banana"
firstLongest(["purple", "yellow", "orange"])        -> "purple"
*/

function firstLongest(arr){
    let longestword = ""
    for (const word of arr){
    if(word.length >  longestword.length) longestword = word
 } 
 return longestword
}
console.log(firstLongest(["red", "blue", "yellow", "white"]))

/*
Requirement:
Write a function named as lastShortest() which takes an array as an argument and returns the shortest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the shortest count of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"])    -> "red"
lastShortest(["Apple", "Banana", "Mango"])          -> "Mango"
lastShortest(["white", "yellow", "brown"])          -> "brown"
*/

function lastShortest(arr){
    let shortword = arr[0]
    for (const word of arr){
    if (word.length <= shortword.length) shortword = word
  } 
 return shortword
}
console.log(lastShortest(["Apple", "Banana", "Mango"]))

function max(arr){
    let maxNum = -Infinity;
    for (const num of arr){
        if( num > maxNum ) maxNum = num
    } return maxNum
}
console.log(max([-2, 0, -7, 10, -5]))


function min(arr){
    if (arr.length === 0 ) return "Empty erray"
    let minNum = Infinity;
    for (const num of arr){
        if( num < minNum ) minNum = num
    } return minNum
}
console.log(min([-2, 0, -7, 10, -5]))
console.log(min([]))

function commonElements(arr1, arr2){
    const newArr = [];
 for (const num of arr1){
    if (arr2.includes(num)) newArr.push(num)
    } 
   return newArr
}
console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]))
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]))
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]))