//Task 1

const hasLowerCase = str => str.split("").some(x => (x >= "a" && x <= "z"))
console.log(hasLowerCase("JAVA"))

// Task2

const noZero = arr => arr.filter(x => !(x === 0))
console.log(noZero([10, 100, 0]))

// Task 3

const numberAndSquare = arr => {
    newArr = []
    arr.forEach(e => {
        numArr = []
        numArr.push(e)
        numArr.push(e * e)
        newArr.push(numArr)
    });
    return newArr
}
console.log(numberAndSquare([1, 2, 3]))

// 2 way

const numberAndSquare2 = arr => arr.map(e => [e, (e * e)])
console.log(numberAndSquare2([1, 2, 3]))

// Task 4

const containsValue = (arr, str) => arr.includes(str)

console.log(containsValue(["abc", "foo", "javascript"], "hello"))
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"))
console.log(containsValue(["abc", "def", "123"], "Abc"))

// Task 5
const reverseSentence = str => {
    if (str.includes(" ")) {
        result = str.split(" ").reverse().join(" ")
        return (result[0]).toUpperCase() + (result.slice(1)).toLowerCase()
    }
    else return 'There is not enough words!'
}
console.log(reverseSentence("Hello"))
console.log(reverseSentence("Javascript is fun"))
console.log(reverseSentence("This is a sentence"))

// Task 6

const removeStringSpecialsDigits = str => (str.split("").filter(x => ((x >= "A" && x <= "Z") || (x >= "a" && x <= "z") || (x === " ")))).join("")

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"))

// Task 7

const removeArraySpecialsDigits = arr => arr.map(str => str.split("").filter(x => ((x >= "A" && x <= "Z") || (x >= "a" && x <= "z"))).join("")) 
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]))
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]))

// Task 8 

const getCommons = (arr1, arr2) => {
    commonWords = []
    arr1.forEach(word => { if (arr2.includes(word) && !commonWords.includes(word)) commonWords.push(word)})
    return commonWords
}
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]))
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]))
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"]))

// Task 9

const noXInVariables = arr =>{
    removedArr = arr.map(word =>{
       return (word.toString().split("").filter(letter =>!(letter.toUpperCase() === "X"))).join("")
    })
    return removedArr.filter(word => (word.length > 0))
}

console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))
console.log(noXInVariables(["x", 123, "#$%"]))
console.log(noXInVariables(["xyz", 123, "#$%"]))
console.log(noXInVariables(["abc", 123, "#$%"]))
