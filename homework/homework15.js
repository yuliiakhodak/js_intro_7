// Task 1 

const toCamelCase = str => {

    let arr = str.split(" ").filter(x => x.length > 0)
    if (arr.length < 2) return str
    else {
        let newStr = [arr[0].toLowerCase()]
        for (let i = 1; i < arr.length; i++) {
            newStr.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase())
        }
        return newStr.join("")
    }
}

console.log(toCamelCase('first name'))
console.log(toCamelCase('last    name'))
console.log(toCamelCase('ZIP CODE'))
console.log(toCamelCase('I Learn Java Script'))
console.log(toCamelCase('helloWorld'))

// Task 2

const toSnakeCase = str => {

    let arr = str.split(" ").filter(x => x.length > 0)
    if (arr.length < 2) return str
    else {
        let newStr = [arr[0].toLowerCase()]
        for (let i = 1; i < arr.length; i++) {
            newStr.push("_" + arr[i].toLowerCase())
        }
        return newStr.join("")
    }
}

console.log(toSnakeCase("first name"))
console.log(toSnakeCase("last   name"))
console.log(toSnakeCase("   I love Java Script"))
console.log(toSnakeCase("already_snake_case"))
console.log(toSnakeCase("hello"))

// Task 3

const alternatingCases = str => {
    let newArr = []
    if (str.includes(" ")) {
        let arr = str.split(" ")
        arr.forEach(word => {
            let letters = word.split("")
            for (let i = 0; i < letters.length; i++) {
                if (i % 2 === 0) newArr.push(letters[i].toUpperCase())
                else newArr.push(letters[i].toLowerCase())
            }
            newArr.push(" ")
        })

    }
    else {
        let arr = str.split("")
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) newArr.push(arr[i].toUpperCase())
            else newArr.push(arr[i].toLowerCase())
        }
        newArr.push(" ")
    }

    return newArr.join("")
}

console.log(alternatingCases("hello"))
console.log(alternatingCases("basketball"))
console.log(alternatingCases("123!@#aB"))
console.log(alternatingCases(""))
console.log(alternatingCases("Tech Global"))



// Task 4

const isNeutral = (str1, str2) => {
    let result = []
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) result.push(str1[i])
        else result.push(0)
    }
    return result.join("")
}



console.log(isNeutral("-", "+"))
console.log(isNeutral("-+", "-+"))
console.log(isNeutral("-++-", "-+-+"))
console.log(isNeutral("--++--", "++--++"))
console.log(isNeutral("+++", "+++"))


// Task 5
const isTrueOrFalse = str => {
    let arr = str.toUpperCase().split(" ")
    let countPos = 0;
    let countNeg = 0;
    for (let i = 0; i < arr.length; i++) {
        if ("ABCDEFGHIJKLM".includes(arr[i][0])) countPos++
        else countNeg++
    }
    if (countPos >= countNeg) return true
    else return false
}

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"))
console.log(isTrueOrFalse("Xylophones can obtain Xenon."))
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"))
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"))
console.log(isTrueOrFalse("Got stuck in the Traffic"))
