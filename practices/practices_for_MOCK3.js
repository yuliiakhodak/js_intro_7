//Swap First and Last Characters

const replaceFirstLast = str => {
    if (str.trim().length < 2) return ""
    else {
        firstChar = str.slice(0, 1)
        lastChar = str.slice(str.length - 1)
        middleChar = str.slice(1, str.length - 1)
        return lastChar + middleChar + firstChar
    }

}
console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast("    V    "))
console.log(replaceFirstLast("Z"))


//Swap First and Last Words

const swapFirstLastWord = str => {
    const words = str.trim().split(" ")
    if (str.length < 2) return ""
    else {
        [words[0], words[words.length - 1]] = [words[words.length - 1], words[0]]
        return words.join(" ")
    }
}
console.log(swapFirstLastWord("Hello World"))
console.log(swapFirstLastWord("I like JavaScript"))


//Factorial

const factorial = num => (num === 0 || num === 1) ? 1 : num * factorial(num - 1)
console.log(factorial(5))

//Remove Extra Spaces

const removeExtraSpaces = str => ((str.trim().split(" ")).filter(x => x.length > 0)).join(" ")
console.log(removeExtraSpaces(" A   Hello   World  "))


// First Duplicate Element 

const firstDuplicate = arr => {
    let firstDuplicate = -1
    for (let i = 0; i < arr.length; i++) {
        if ((arr.slice(i + 1)).includes(arr[i])) {
            firstDuplicate = arr[i]
            break
        }
    }
    return firstDuplicate
}

console.log(firstDuplicate(["foo", 123, 'abc', "foo", "bar"]));
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]))
console.log(firstDuplicate([5, '5', 3, 7, 4]))
console.log(firstDuplicate([123, "abc", "123", 3, "abc"]))
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]))

//Find All Duplicate Elements

const getDuplicates = arr => {
    let AllDublicates = []
    for (i = 0; i < arr.length; i++) {
        if (arr.slice(i + 1).includes(arr[i]) && !AllDublicates.includes(arr[i])) {
            AllDublicates.push(arr[i])
        }
    }
    return AllDublicates
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]))
console.log(getDuplicates([1, 2, 5, 0, 7]))
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']))
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']))

// Reverse String Words

const reverseStringWords = str => str.trim().split(" ").map(word => word.split("").reverse().join("")).join(" ")
console.log(reverseStringWords("Hello World"))

//Add Two Arrays

const add = (arr1, arr2) => {
    let newArr = []
    if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] === undefined) newArr.push(arr1[i])
        else newArr.push(arr1[i] + arr2[i])
    }
    return newArr
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))

//Fizz Buzz

const fizzBuzz = num => {
    let arrNumbers = []
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) arrNumbers.push("FizzBuzz")
        else if (i % 3 === 0) arrNumbers.push("Fizz")
        else if (i % 5 === 0) arrNumbers.push("Buzz")
        else arrNumbers.push(i)
    }
    return arrNumbers
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(10))
console.log(fizzBuzz(15))
console.log(fizzBuzz(2))

//Palindrome 

const isPalindrome = str => str.toLowerCase() === str.toLowerCase().split("").reverse().join("")

console.log(isPalindrome("Hello"))
console.log(isPalindrome("Kayak"))

//Remove Duplicates

const removeDuplicates = arr => {
    let dublicates = []
    let NoDublicates = []
    for (i = 0; i < arr.length; i++) {
        if (arr.slice(i + 1).includes(arr[i])) dublicates.push(arr[i])
        else NoDublicates.push(arr[i])
    }
    return NoDublicates
}

const removeDuplicates2 = arr =>{
    const set = new Set(arr)
    return [...set]
}



console.log(removeDuplicates2([10, 20, 35, 20, 35, 60, 70, 60]))
console.log(removeDuplicates2([1, 2, 5, 2, 3]))
console.log(removeDuplicates2([0, -1, -2, -2, -1]))
console.log(removeDuplicates2(["abc", "xyz", "123", "ab", "abc", "ABC"]))
console.log(removeDuplicates2(["1", "2", "3", "2", "3"]))

// Prime Number

const isPrime = num => {
    if (num < 2) return false
    if (num === 2 || num === 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    for (let i = 5; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}
console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(32))

//Array Factorial

const arrFactorial = arr => {
    const factorial = num => (num <= 1) ? 1 : num * factorial(num - 1)
    return arr.map(x => factorial(x))
}

console.log(arrFactorial([1, 2, 3, 4]))

//Find Biggest Number - MAKE SURE TO REMEMBER

const findBiggestNumber = str => {
    let arrOnlyNumbers = []
    str.split("").forEach(x => {
        if (!(x >= '0' && x <= '9')) arrOnlyNumbers.push(" ")
        else arrOnlyNumbers.push(x)
    })
    arr = arrOnlyNumbers.join("").split(" ")
    return Math.max(...arr)
    let Max = 0
    for (char of arr) {
        if (parseInt(char) > Max) Max = char
    }
    return Max
}

console.log(findBiggestNumber("ab110c045d"))
console.log(findBiggestNumber("abc$"))
console.log(findBiggestNumber("a1b4c 6#"))
console.log(findBiggestNumber("ab110c045d"))
console.log(findBiggestNumber("525"))
console.log(findBiggestNumber("3 for 10 dollars"))

//Find Sum Numbers - MAKE SURE TO REMEMBER
const findSumNumbers = str => {
    newArr = str.split("").map(x => isNaN(x) ? " " : x)
    return newArr.join("").split(" ").reduce((acum, num) => Number(acum) + Number(num))
}

console.log(findSumNumbers("a1b4c 6#"))
console.log(findSumNumbers("ab110c045d"))
console.log(findSumNumbers("525"))


// Is Power Of 3

const isPowerOf3 = num =>{
    for (let i = num; i > 0; i /=3 ){
        if(i === 1) return true
    }
   return false
}

console.log(isPowerOf3(27))

//Fibonacci Series 1

const fibonacciSerias1 = n =>{
if (n === 1 ) return [0]
if (n === 2 ) return [0, 1]
let result = [0, 1]
for (i = 2; i < n; i++){
    result.push(result[i - 2] + result[i - 1])
}
return result
}

console.log(fibonacciSerias1(5))

//Fibonacci Series 2

const fibonacciSeries2 = num =>{
    if(num === 1) return [0]
    if(num === 2) return [0, 1]
    let result = [0, 1]
    for(i = 2; i < num; i++){
        result.push(result[i - 1] + result[i - 2] )
    }
    return result[result.length - 1]
}

console.log(fibonacciSeries2(8))

// Find Uniques 
const findUniques = (arr1, arr2) => {
    let result = []
    //if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]

    for(let i = 0; i < arr1.length; i++){
       if (!arr2.includes(arr1[i]) && !result.includes(arr1[i])) result.push(arr1[i])
    }
    for(let i = 0; i < arr2.length; i++){
        if (!arr1.includes(arr2[i]) && !result.includes(arr2[i])) result.push(arr2[i])
     }
    return result
}
console.log(findUniques([], []))
console.log(findUniques([], [1, 2, 3, 2]))
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]))
console.log(findUniques([-1, -2], [1, 2]))
console.log(findUniques([8,9], [ 9, 8, 9]))

const findUniques2 = (arr1, arr2) => {
    const addedArr = arr1.concat(arr2)
    const filreredArr = addedArr.filter(i => !(arr1.includes(i) && arr2.includes(i)))
    const set = new Set(filreredArr)
    return [...set]
}
console.log(findUniques2([], []))
console.log(findUniques2([], [1, 2, 3, 2]))
console.log(findUniques2([1, 2, 3, 4], [3, 4, 5, 5]))
console.log(findUniques2([-1, -2], [1, 2]))
console.log(findUniques2([8,9], [ 9, 8, 9]))

// reverse number

const reverseNumber = num =>{
    let result = 0
    for (i = num; i > 0; i = Math.floor(i / 10)){
        result = (result * 10) + (i % 10)
    }
    return result
}

console.log(reverseNumber(123))

// Is Armstrong

const isArmstrong = num =>{
   const arr =  num.toString().split("")
   let newNum = 0

   arr.forEach( x =>{
    newNum += parseInt(x) ** arr.length
   })
   return num === newNum

}
console.log(isArmstrong(153))

//Is Anagram

const isAnagram = (str1, str2) => str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")


console.log(isAnagram("Apple", "Peach"))
console.log(isAnagram("CINEMA", "iceman"))

// Count Palindrome

const countPalindrome = str =>{
    const isPalindrome = str => str.toLowerCase() === str.toLowerCase().split("").reverse("").join("")
    return (str.split(" ").filter(word => isPalindrome(word))).length
}

console.log(countPalindrome("Mom and Dad"))

//Can Form String

const canFormString = (str1, str2) =>{
    arr1 = str1.toLowerCase().split("")
    arr2 = str2.toLowerCase().split("").filter(x => x != " ")
    for(let i = 0; i < arr2.length; i++){
        if(arr1.includes(arr2[i])) arr1.splice(arr1.indexOf(arr2[i]), 1)
        else return false
    }
    return true
}

console.log(canFormString("Hello", "Hi"))
console.log(canFormString("halogen", "hello"))
console.log(canFormString("programming", "gaming"))

// Count Occurrence
const countOccurrence = (str1, str2) =>{
    let count = 0;
    let str2Sorted = str2.toLowerCase().split("").sort().join("")

    for (i = 0; i < str1.length; i++){
        subString = str1.slice(i, i + str2.length).toLowerCase().split("").sort().join("")
        if(subString === str2Sorted ){
            count++
            i += str2.length - 1
        }
    }
    return count
}

console.log(countOccurrence("Can I can a can", "anc"))