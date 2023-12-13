// Task 1

const countPalindrome = str => {
    const palindrome = word => {
        if (word.toLowerCase() === word.toLowerCase().split("").reverse().join("")) return true
        else return false
    }
    if (str.length < 1) return 0
    else return (str.split(" ").filter(word => palindrome(word))).length
}

console.log(countPalindrome("Mom and Dad"))
console.log(countPalindrome("See you at noon"))
console.log(countPalindrome("Kayak races attracts racecar drivers"))
console.log(countPalindrome(""))
console.log(countPalindrome("No palindrome here"))

// Task 2

const sum = (arr, boolean) => {

    if (boolean === true) {
        let sum = 0
        arr.forEach((element, index) => {
            if (index % 2 === 0) sum += Number(element)
        });
        return sum

    }
    else {
        let sum = 0
        arr.forEach((element, index) => {
            if (index % 2 !== 0 && arr[index] !== 0) sum += Number(element)
        });
        return sum
    }

}

console.log(sum([1, 5, 10], true))
console.log(sum([3, 7, 2, 5, 10], false))
console.log(sum([-1, 1, -2, 2], true))
console.log(sum([0, -1, 15, 1], false))
console.log(sum([1, 2, 3, 4, -4], true))

//Task-3

const nthChars = (str, num) => {
    let result = []
    str.split("").forEach((char, index) => {
        if ((index + 1) % num === 0) result.push(char)
    })
    return result.join("")
}

console.log(nthChars("Java", 2))
console.log(nthChars("JavaScript", 5))
console.log(nthChars("Java", 3))
console.log(nthChars("Hi", 4))
console.log(nthChars("0123456789", 2))


// Task 4

const canFormString = (str1, str2) => {

    let result = null
    arr2 = str2.toLowerCase().split("")
    arr2.forEach(x => (!(str1.toLowerCase().includes(x))) ? result = false : result = true)
    return result

}
console.log(canFormString("Hello", "Hi"))
console.log(canFormString("programming", "gaming"))
console.log(canFormString("halogen", "hello"))
console.log(canFormString("CONVERSATION", "voices rant on"))
console.log(canFormString("12", "123"))


// Task 5

const isAnagram = (str1, str2) => {
    arr1 = str1.toLowerCase().split("").filter(x => !(x === " ")).sort().join("")
    arr2 = str2.toLowerCase().split("").filter(x => !(x === " ")).sort().join("")
    return arr1 === arr2
}

console.log(isAnagram("Apple", "Peach"))
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("astronomer", "moon starer"))
console.log(isAnagram("CINEMA", "iceman"))
console.log(isAnagram("123", "1234"))


// Task 6 

const count = (arr, boolean) => (boolean === true) ? arr.filter(x => x % 2 === 0).length : arr.filter(x => !(x % 2 === 0)).length


console.log(count([1, 5, 10], true))
console.log(count([3, 7, 2, 5, 10], false))
console.log(count([-1, 1, -2, 2], true))
console.log(count([0, -1, 15, 1], false))
console.log(count([1, 2, 3, 4, -4], true))


// Task 7 

const sumDigitsDouble = (str) => {
    const numbers = str.split("").filter(x => (x >= 1 && x <= 9))
    if (numbers.length <= 1) return ("-1")
    else return (numbers.reduce((num, sum) => Number(num) + Number(sum), 0)) * 2

}
console.log(sumDigitsDouble("Javascript"))
console.log(sumDigitsDouble("23abc45"))
console.log(sumDigitsDouble("Hi-23"))
console.log(sumDigitsDouble("ab12"))
console.log(sumDigitsDouble("n0numh3r3"))


// Task 8

const countOccurrence = (str1, str2) => {
    let arr = str1.toLowerCase().split("")
    return Math.trunc(((arr.filter(x => str2.toLowerCase().includes(x))).length) / str2.length)

}

console.log(countOccurrence("Javascript", "Java"))
console.log(countOccurrence("Hello", "World"))
console.log(countOccurrence("Can I can a can", "anc"))
console.log(countOccurrence("Hello", "l"))
console.log(countOccurrence("IT conversations", "IT"))